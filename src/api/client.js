// src/api/client.js
export const apiClient = async (url, options = {}) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
  };
  // attach token from localStorage if present
  const authRaw = localStorage.getItem('auth');
  let token;
  try {
    token = authRaw ? JSON.parse(authRaw).token : null;
  } catch (e) {
    token = null;
  }

  const headers = { ...defaultHeaders, ...options.headers };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const response = await fetch(url, {
    ...options,
    headers,
  });

  // Try to parse JSON but handle empty responses
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    const message = data && data.message ? data.message : `Error ${response.status}: ${response.statusText}`;
    const err = new Error(message);
    err.status = response.status;
    err.data = data;
    throw err;
  }

  return data;
};
