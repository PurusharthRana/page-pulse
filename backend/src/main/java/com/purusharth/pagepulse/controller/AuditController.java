package com.purusharth.pagepulse.controller;

import com.purusharth.pagepulse.payload.AuditRequest;
import com.purusharth.pagepulse.payload.AuditResponse;
import com.purusharth.pagepulse.service.AuditService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/audit")
public class AuditController {

    private final AuditService auditService;

    public AuditController(AuditService auditService) {
        this.auditService = auditService;
    }

    @GetMapping("/test")
    public String test() {
        return "Backend Working!";
    }

    @PostMapping
    public ResponseEntity<AuditResponse> auditWebsite(@Valid @RequestBody AuditRequest auditRequest) throws IOException {
        AuditResponse auditResponse = auditService.auditWebsite(auditRequest);
        return new ResponseEntity<>(auditResponse, HttpStatus.OK);
    }

}
