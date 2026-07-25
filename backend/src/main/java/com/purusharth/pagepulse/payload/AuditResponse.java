package com.purusharth.pagepulse.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuditResponse {
    private String url;
    private Integer httpStatus;
    private Long responseTime;
    private String title;
    private String metaDescription;
    private Integer h1Count;
    private Integer missingAltImages;
    private Integer wordCount;
}
