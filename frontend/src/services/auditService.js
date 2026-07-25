import axios from 'axios'

// Base URL for the future backend. Not used yet — mocked responses are
// returned below. Swap `runAudit` internals to the commented block when
// the backend is ready.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

export const auditApiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Basic client-side URL validation before we ever hit the network.
export function isValidUrl(value) {
  if (!value || value.trim() === "") {
    return false;
  }

  return true;
}

// Simulates network latency so the loading skeleton is visible.
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function runAudit(url) {

  if (!isValidUrl(url)) {
    const error = new Error("INVALID_URL");
    error.code = "INVALID_URL";
    throw error;
  }

  try {
    const { data } = await auditApiClient.post(
      "/api/v1/audit",
      {
        url,
      }
    );
    return data;
  }

  catch (err) {

    if (err.code === "ECONNABORTED") {
      const error = new Error("TIMEOUT");
      error.code = "TIMEOUT";
      throw error;
    }

    if (err.response) {
      const message = err.response.data?.message || "SERVER_ERROR";
      const error = new Error(message);
      error.code = err.response.status;
      throw error;
    }

    const error = new Error("SERVER_ERROR");
    error.code = "SERVER_ERROR";
    throw error;
  }

}