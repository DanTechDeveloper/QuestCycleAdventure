/**
 * Generic REST API handler with action parameter
 * @param {string} url - base endpoint URL
 * @param {string} action - action/resource identifier (e.g., "users", "login")
 * @param {string} method - HTTP method: GET, POST, PUT, DELETE
 * @param {object|null} body - request body for POST/PUT
 * @param {object} headers - optional additional headers
 * @returns {Promise<object>} - parsed JSON response
 */
export default async function apiRequest(
  url,
  action,
  method = "GET",
  body = null,
  headers = {}
) {
  try {
    // Append action as query parameter for GET requests
    let fullUrl = url;
    if (action) {
      const separator = url.includes("?") ? "&" : "?";
      fullUrl += `${separator}action=${encodeURIComponent(action)}`;
    }

    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      credentials: "include",
    };

    // Include body only for POST, PUT, DELETE
    if (body && method !== "GET") {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(fullUrl, options);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const text = await response.text();
    return text ? JSON.parse(text) : {};
  } catch (err) {
    console.error("API request failed:", err);
    throw err;
  }
}