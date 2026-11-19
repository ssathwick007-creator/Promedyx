/**
 * PulseGuard Core API Client Architecture
 * Foundational transport layer for future telemetry streaming and early warning APIs.
 * Note: Backend endpoints and hardware integrations are implemented in future phases.
 */

const DEFAULT_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL || '/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-Client-Agent': 'PulseGuard-Web/0.1.0',
  },
};

/**
 * Standard API error structure for clinical audit traces.
 */
export class ApiError extends Error {
  constructor(message, status, code, details = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.details = details;
    this.timestamp = new Date().toISOString();
  }
}

export const apiClient = {
  /**
   * Base fetch handler with timeout and standardized error wrapping.
   */
  async request(endpoint, options = {}) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), options.timeout || DEFAULT_CONFIG.timeout);

    try {
      const response = await fetch(`${DEFAULT_CONFIG.baseURL}${endpoint}`, {
        ...options,
        signal: controller.signal,
        headers: {
          ...DEFAULT_CONFIG.headers,
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new ApiError(
          `Request failed with status ${response.status}`,
          response.status,
          response.statusText
        );
      }

      return await response.json();
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new ApiError('Request timeout reached', 408, 'REQUEST_TIMEOUT');
      }
      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  },
};

export default apiClient;

