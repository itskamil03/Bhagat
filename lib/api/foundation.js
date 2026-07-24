// lib/api/foundation.js

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
console.log("Raw env value:", process.env.NEXT_PUBLIC_API_URL);
console.log("Resolved API_BASE:", API_BASE);

// Confirmed from Cloudinary dashboard / .env — safe to expose in frontend code.
// (Only the API key + secret must stay server-side only.)
const CLOUDINARY_CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dsa5cyrsa";

/**
 * Confirmed shape from GET /api/foundation/:
 *   { success: true, data: [{ _id, title, description, image, createdAt, updatedAt, __v }] }
 *
 * Confirmed error shape:
 *   { success: false, message: "..." }
 */
async function parseResponse(res) {
  const text = await res.text();
  let json;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = null;
  }

  if (!res.ok || json?.success === false) {
    const message = json?.message || `Request failed (${res.status})`;
    throw new Error(message);
  }

  return json;
}

/** GET /api/foundation/ — fetch all foundations */
export async function getFoundations() {
  const targetUrl = `${API_BASE}/api/foundation/`;
  try {
    const res = await fetch(targetUrl, {
      method: "GET",
      cache: "no-store",
    });
    const json = await parseResponse(res);
    return json.data;
  } catch (error) {
    console.error(`Failed to fetch foundations from ${targetUrl}:`, error);
    if (error.cause) {
      console.error("Error cause:", error.cause);
    }
    throw error;
  }
}

/**
 * POST /api/foundation/create — create a new foundation
 */
export async function createFoundation(formData) {
  const res = await fetch(`${API_BASE}/api/foundation/create`, {
    method: "POST",
    body: formData,
  });
  const json = await parseResponse(res);
  return json.data;
}

/**
 * PUT /api/foundation/:id — replace a foundation's data
 */
export async function updateFoundation(id, formData) {
  const res = await fetch(`${API_BASE}/api/foundation/${id}`, {
    method: "PUT",
    body: formData,
  });
  const json = await parseResponse(res);
  return json.data;
}

/** DELETE /api/foundation/:id — remove a foundation */
export async function deleteFoundation(id) {
  const res = await fetch(`${API_BASE}/api/foundation/${id}`, {
    method: "DELETE",
  });
  return parseResponse(res);
}

/**
 * Resolves a foundation's Cloudinary public ID
 * into a full, loadable image URL.
 */
export function foundationImageUrl(foundation) {
  if (!foundation?.image) return null;
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${foundation.image}`;
}
