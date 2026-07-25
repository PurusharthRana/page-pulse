package com.purusharth.pagepulse.exception;

public class WebsiteTimeoutException extends RuntimeException {

    public WebsiteTimeoutException(String message) {
        super(message);
    }
}