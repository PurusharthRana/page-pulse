package com.purusharth.pagepulse.service;

import com.purusharth.pagepulse.exception.InvalidUrlException;
import com.purusharth.pagepulse.exception.UnsupportedContentTypeException;
import com.purusharth.pagepulse.exception.WebsiteTimeoutException;
import com.purusharth.pagepulse.payload.AuditRequest;
import com.purusharth.pagepulse.payload.AuditResponse;
import org.jsoup.Connection;
import org.jsoup.HttpStatusException;
import org.jsoup.Jsoup;
import org.jsoup.UnsupportedMimeTypeException;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.SocketTimeoutException;
import java.net.URI;
import java.net.URISyntaxException;

@Service
public class AuditService {
    private static final int TIMEOUT = 5000;

    public AuditResponse auditWebsite(AuditRequest auditRequest) {
        String url = auditRequest.getUrl().trim();

        // Checking if the url is empty or not
        if(url.isBlank()){
            throw new InvalidUrlException("URL cannot be empty!");
        }

        // So that user can search: google.com instead of https://google.com
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }

        try {
            URI uri = new URI(url);

            if (uri.getHost() == null) {
                throw new InvalidUrlException("Please enter a valid website URL.");
            }

        } catch (URISyntaxException e) {
            throw new InvalidUrlException("Please enter a valid website URL.");
        }

        try{
            // Measuring Response Time
            long startTime = System.currentTimeMillis();

            // Fetching the website
            Connection.Response response = Jsoup.connect(url)
                    .timeout(TIMEOUT)
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
                    metaDescription != null ? metaDescription.attr("content") : "Meta description not available.";

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
            String text = document.body() != null ? document.body().text() : "";
            int wordCount = text.isBlank() ? 0 : text.trim().split("\\s+").length;

            AuditResponse auditResponse = new AuditResponse(url, statusCode, responseTime, title, description,
                                                            h1Count, missingAltImages, wordCount);

            return auditResponse;
        }
        catch (SocketTimeoutException e) {
            throw new WebsiteTimeoutException(
                    "Website took too long to respond."
            );
        }
        catch (UnsupportedMimeTypeException e) {
            throw new UnsupportedContentTypeException(
                    "Only HTML pages are supported."
            );
        }
        catch (HttpStatusException e) {
            throw new InvalidUrlException(
                    "Website returned HTTP Status " + e.getStatusCode()
            );
        }
        catch (IOException e) {
            throw new InvalidUrlException(
                    "Invalid URL or website is unreachable."
            );
        }
    }
}
