package com.purusharth.pagepulse.service;

import com.purusharth.pagepulse.exception.InvalidUrlException;
import com.purusharth.pagepulse.payload.AuditRequest;
import com.purusharth.pagepulse.payload.AuditResponse;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class AuditService {
    public AuditResponse auditWebsite(AuditRequest auditRequest) throws IOException {
        String url = auditRequest.getUrl();

        // Checking if the url is empty or not
        if(url == null || url.isBlank()){
            throw new InvalidUrlException("URL cannot be empty!");
        }

        // So that user can search: google.com instead of https://google.com
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }

        try{
        // Measuring Response Time
        long startTime = System.currentTimeMillis();

        // Fetching the website
        Connection.Response response = Jsoup.connect(url)
                .timeout(5000)
                .followRedirects(true)
                .execute();

        Document document = response.parse();

        long endTime = System.currentTimeMillis();
        long responseTime = endTime - startTime;

        // Getting Http status code
        int statusCode = response.statusCode();

        // Extracting title
        String title = document.title();

        // Extracting meta description
        Element metaDescription =
                document.selectFirst("meta[name=description]");

        // Ensuring meta description exists
        String description =
                metaDescription != null
                        ? metaDescription.attr("content")
                        : "Meta description not available.";

        // Count of h1 tags
        int h1Count = document.select("h1").size();

        // Count images missing alt attribute inside img tag
        int missingAltImages = 0;
        for (Element image : document.select("img")) {
            if (!image.hasAttr("alt") || image.attr("alt").isBlank()) {
                missingAltImages++;
            }
        }

        // Counting approx. no of words
        String text = document.body().text();
        int wordCount = text.isBlank()
                ? 0
                : text.trim().split("\\s+").length;

        AuditResponse auditResponse = new AuditResponse(statusCode, responseTime, title, description,
                                                        h1Count, missingAltImages, wordCount);

        return auditResponse;

        }
        catch(IOException e){
            throw new InvalidUrlException("Unable to access the website.");
        }
    }
}
