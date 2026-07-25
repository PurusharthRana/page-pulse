package com.purusharth.pagepulse.service;

import com.purusharth.pagepulse.exception.InvalidUrlException;
import com.purusharth.pagepulse.payload.AuditRequest;
import com.purusharth.pagepulse.payload.AuditResponse;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class AuditServiceTest {

    private final AuditService auditService = new AuditService();

    @Test
    void shouldAuditValidWebsite() {

        AuditRequest request = new AuditRequest();
        request.setUrl("https://github.com");

        AuditResponse response = auditService.auditWebsite(request);

        assertNotNull(response);
        assertEquals(200, response.getHttpStatus());
        assertFalse(response.getTitle().isBlank());
        assertTrue(response.getResponseTime() > 0);
    }

    @Test
    void shouldThrowExceptionForInvalidUrl() {

        AuditRequest request = new AuditRequest();
        request.setUrl("invalid-url###");

        assertThrows(
                InvalidUrlException.class,
                () -> auditService.auditWebsite(request)
        );
    }

    @Test
    void shouldThrowExceptionForEmptyUrl() {

        AuditRequest request = new AuditRequest();
        request.setUrl("   ");

        InvalidUrlException exception = assertThrows(
                InvalidUrlException.class,
                () -> auditService.auditWebsite(request)
        );

        assertEquals("URL cannot be empty!", exception.getMessage());
    }

}