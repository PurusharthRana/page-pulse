<div align="center">

# 🌐 Page Pulse: Website Audit Tool

A full-stack web application that audits any website URL and generates a concise report containing HTTP status, response time, page title, meta description, H1 count, missing image alt attributes, and approximate word count.

</div>

---

## 📖 Overview

Page Pulse is a simple website auditing tool built as part of the **Digital Heroes Software Development (SDE) Training Task**. It accepts a website URL, analyzes the page, and generates a concise report with key SEO and accessibility metrics while gracefully handling invalid URLs, timeouts, and unsupported content.

---

## ✨ Features

- 🌐 Audit any public website URL
- 📊 HTTP Status & Response Time
- 📝 Page Title & Meta Description
- 🔢 H1 Tag Count
- 🖼️ Images Missing Alt Text
- 📄 Approximate Word Count
- ⚠️ Centralized Exception Handling
- ✅ Input Validation
- 🧪 Unit Tests for Core Service

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Backend | Spring Boot, Java 21 |
| Frontend | React, Vite, Tailwind CSS |
| HTML Parsing | Jsoup |
| Testing | JUnit 5 |
| API Testing | Postman |
| Build Tool | Maven |
| Version Control | Git & GitHub |
| Deployment | Railway |

---

## 📂 Project Structure

```text
backend/
├── config
├── controller
├── exception
├── payload
├── service

frontend/
├── components
├── pages
├── services
```

---

## 📡 API Contract

### Request

**POST** `/api/v1/audit`

```json
{
  "url": "https://github.com"
}
```

### Successful Response

```json
{
  "url": "https://github.com",
  "httpStatus": 200,
  "responseTime": 742,
  "title": "GitHub · Change is constant. GitHub keeps you ahead. · GitHub",
  "metaDescription": "Join the world's most widely adopted, AI-powered developer platform where millions of developers, businesses, and the largest open source community build software that advances humanity.",
  "h1Count": 4,
  "missingAltImages": 17,
  "wordCount": 1176
}
```

---

## 🧪 Testing

The project includes JUnit tests covering:

- ✅ Successful website audit
- ✅ Invalid URL handling
- ✅ Empty URL validation

---

## 💡 Design Decisions

### 1. Used Jsoup for HTML Parsing
Jsoup provides a simple and reliable way to fetch web pages and extract HTML elements such as titles, meta descriptions, headings, and images.

### 2. Centralized Exception Handling
Implemented `@RestControllerAdvice` with custom exceptions to return consistent and meaningful error responses.

### 3. Layered Architecture
Separated the application into Controller, Service, and Payload layers to keep responsibilities clear and improve maintainability.

---

## 🚀 Running Locally

### Backend

```bash
mvn spring-boot:run
```

### Frontend

```bash
npm install
npm run dev
```

---

## 🌍 Live Demo

- **Frontend:** `<your frontend URL>`
- **Backend:** `<your backend URL>`

---

## 🔮 Future Improvements

- Add SEO score calculation
- Export audit reports as PDF
- Improve accessibility analysis
- Dockerize the application
- Add CI/CD pipeline

---

## 👨‍💻 Author

**Purusharth Rana**

B.Tech (Information Technology), IIIT Una

---

Built for **Digital Heroes Training Task**