// lib/api/brandLogo.js

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

console.log("Raw env value:", process.env.NEXT_PUBLIC_API_URL);
console.log("Resolved API_BASE:", API_BASE);

/**
 * Parses API responses.
 * Expected success response:
 * {
 *   success: true,
 *   data: ...
 * }
 */
async function parseResponse(res) {
  const text = await res.text();

  let json = null;

  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = null;
  }

  if (!res.ok || json?.success === false) {
    throw new Error(
      json?.message || `Request failed with status ${res.status}`
    );
  }

  return json;
}

/**
 * GET
 * Fetch all brand logos
 */
export async function getBrandLogos() {
  const res = await fetch(`${API_BASE}/api/brand-Logo/`, {
    method: "GET",
    cache: "no-store",
  });

  const json = await parseResponse(res);

  return json.data;
}

/**
 * POST
 * Create brand logo
 */
export async function createBrandLogo(formData) {
  const res = await fetch(`${API_BASE}/api/brand-Logo/create`, {
    method: "POST",
    body: formData,
  });

  const json = await parseResponse(res);

  return json.data;
}

/**
 * PUT
 * Update brand logo
 */
export async function updateBrandLogo(id, formData) {
  const res = await fetch(`${API_BASE}/api/brand-Logo/${id}`, {
    method: "PUT",
    body: formData,
  });

  const json = await parseResponse(res);

  return json.data;
}

/**
 * DELETE
 * Delete brand logo
 */
export async function deleteBrandLogo(id) {
  const res = await fetch(`${API_BASE}/api/brand-Logo/${id}`, {
    method: "DELETE",
  });

  const json = await parseResponse(res);

  return json;
}
