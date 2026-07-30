// lib/api/journeyGallery.js

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

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
 * Fetch all journey gallery
 */
export async function getJourneyGallery() {
  const res = await fetch(`${API_BASE}/api/gallery/`, {
    method: "GET",
    cache: "no-store",
  });

  const json = await parseResponse(res);

  return json.data;
}

/**
 * POST
 * Create journey gallery
 */
export async function createJourneyGallery(formData) {
  const res = await fetch(`${API_BASE}/api/gallery/create`, {
    method: "POST",
    body: formData,
  });

  const json = await parseResponse(res);

  return json.data;
}

/**
 * PUT
 * Update journey gallery
 */
export async function updateJourneyGallery(id, formData) {
  const res = await fetch(`${API_BASE}/api/gallery/update/${id}`, {
    method: "PUT",
    body: formData,
  });

  const json = await parseResponse(res);

  return json.data;
}

/**
 * DELETE
 * Delete journey gallery
 */
export async function deleteJourneyGallery(id) {
  const res = await fetch(`${API_BASE}/api/gallery/delete/${id}`, {
    method: "DELETE",
  });

  const json = await parseResponse(res);

  return json;
}
