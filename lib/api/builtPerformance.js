// lib/api/builtPerformance.js

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
 * Fetch all built performance items
 */
export async function getBuiltPerformance() {
  const res = await fetch(`${API_BASE}/api/built-performance/`, {
    method: "GET",
    cache: "no-store",
  });

  const json = await parseResponse(res);

  return json.data;
}

/**
 * POST
 * Create built performance
 */
export async function createBuiltPerformance(formData) {
  const res = await fetch(`${API_BASE}/api/built-performance/create`, {
    method: "POST",
    body: formData,
  });

  const json = await parseResponse(res);

  return json.data;
}

/**
 * PUT
 * Update built performance
 * ⚠️ Make sure your backend route is:
 * PUT /api/built-performance/:id
 * If your backend uses another route,
 * change this URL accordingly.
 */
export async function updateBuiltPerformance(id, formData) {
  const res = await fetch(`${API_BASE}/api/built-performance/${id}`, {
    method: "PUT",
    body: formData,
  });

  const json = await parseResponse(res);

  return json.data;
}

/**
 * DELETE
 * Delete built performance
 * ⚠️ Make sure backend route matches.
 */
export async function deleteBuiltPerformance(id) {
  const res = await fetch(`${API_BASE}/api/built-performance/${id}`, {
    method: "DELETE",
  });

  const json = await parseResponse(res);

  return json;
}

/**
 * Since backend already returns a full Cloudinary URL,
 * simply return it.
 */
export function builtPerformanceImageUrl(item) {
  return item?.image || "";
}
