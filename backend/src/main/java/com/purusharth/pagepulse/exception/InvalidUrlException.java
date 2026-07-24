package com.purusharth.pagepulse.exception;

public class InvalidUrlException extends RuntimeException{
    String message;

    public InvalidUrlException() {
    }

    public InvalidUrlException(String message) {
        super(String.format("Error: %s", message));
        this.message = message;
    }
}
