import axios from 'axios'

// Base URL for the future backend. Not used yet — mocked responses are
// returned below. Swap `runAudit` internals to the commented block when
// the backend is ready.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'

export const auditApiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Basic client-side URL validation before we ever hit the network.
export function isValidUrl(value) {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

const MOCK_RESPONSE = {
  httpStatus: 200,
  responseTime: 321,
  title: 'Example Domain',
  metaDescription: 'This domain is for use in illustrative examples.',
  h1Count: 1,
  missingAltImages: 3,
  wordCount: 824,
}

// Simulates network latency so the loading skeleton is visible.
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * runAudit(url)
 *
 * Currently returns mocked data so the frontend can be built and reviewed
 * independently of the backend. When the backend is ready, replace the
 * body of this function with the commented-out implementation below —
 * no other component needs to change since they only call `runAudit`.
 */
export async function runAudit(url) {
  if (!isValidUrl(url)) {
    const error = new Error('INVALID_URL')
    error.code = 'INVALID_URL'
    throw error
  }

  await wait(1400)

  // Mock edge cases so the UI's error states are demonstrable:
  if (url.includes('timeout')) {
    const error = new Error('TIMEOUT')
    error.code = 'TIMEOUT'
    throw error
  }
  if (url.includes('error') || url.includes('500')) {
    const error = new Error('SERVER_ERROR')
    error.code = 'SERVER_ERROR'
    throw error
  }

  return { ...MOCK_RESPONSE }

  /* ---- Real backend implementation (enable when API is ready) ----
  try {
    const { data } = await auditApiClient.post('/audit', { url })
    return data
  } catch (err) {
    if (err.code === 'ECONNABORTED') {
      const error = new Error('TIMEOUT')
      error.code = 'TIMEOUT'
      throw error
    }
    if (err.response && err.response.status >= 500) {
      const error = new Error('SERVER_ERROR')
      error.code = 'SERVER_ERROR'
      throw error
    }
    const error = new Error('SERVER_ERROR')
    error.code = 'SERVER_ERROR'
    throw error
  }
  ------------------------------------------------------------------- */
}
