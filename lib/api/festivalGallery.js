// lib/api/festivalGallery.js

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

/**
 * Parses API responses.
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
 * Fetch all festival gallery
 */
export async function getFestivalGallery() {
  const res = await fetch(`${API_BASE}/api/festival`, {
    method: "GET",
    cache: "no-store",
  });

  const json = await parseResponse(res);
  return json.data;
}

/**
 * POST
 * Create festival gallery
 */
export async function createFestivalGallery(formData) {
  const res = await fetch(`${API_BASE}/api/festival/create`, {
    method: "POST",
    body: formData,
  });

  const json = await parseResponse(res);
  return json.data;
}

/**
 * PUT
 * Update festival gallery
 */
export async function updateFestivalGallery(id, formData) {
  const res = await fetch(`${API_BASE}/api/festival/update/${id}`, {
    method: "PUT",
    body: formData,
  });

  const json = await parseResponse(res);
  return json.data;
}

/**
 * DELETE
 * Delete festival gallery
 */
export async function deleteFestivalGallery(id) {
  const res = await fetch(`${API_BASE}/api/festival/delete/${id}`, {
    method: "DELETE",
  });

  const json = await parseResponse(res);
  return json;
}
