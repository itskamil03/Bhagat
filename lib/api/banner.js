// lib/api/banner.js

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
console.log("Raw env value:", process.env.NEXT_PUBLIC_API_URL);
console.log("Resolved API_BASE:", API_BASE);

// Confirmed from Cloudinary dashboard / .env — safe to expose in frontend code.
// (Only the API key + secret must stay server-side only.)
const CLOUDINARY_CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dsa5cyrsa";

/**
 * Confirmed shape from GET /api/banner/:
 *   { success: true, data: [{ _id, image, createdAt, updatedAt, __v }] }
 *
 * Confirmed error shape (e.g. PUT with a bad id):
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

/** GET /api/banner/ — fetch all banners */
export async function getBanners() {
  const targetUrl = `${API_BASE}/api/banner/`;
  try {
    const res = await fetch(targetUrl, {
      method: "GET",
      cache: "no-store",
    });
    const json = await parseResponse(res);
    return json.data; // array of { _id, image, createdAt, updatedAt, __v }
  } catch (error) {
    console.error(`Failed to fetch banners from ${targetUrl}:`, error);
    if (error.cause) {
      console.error("Error cause:", error.cause);
    }
    throw error;
  }
}

/**
 * POST /api/banner/create — create a new banner (multipart, field name "image")
 * Confirmed response:
 *   { success: true, message: "Banner Created Successfully", data: { _id, image, createdAt, updatedAt, __v } }
 */
export async function createBanner(imageFile) {
  const formData = new FormData();
  formData.append("image", imageFile);

  const res = await fetch(`${API_BASE}/api/banner/create`, {
    method: "POST",
    body: formData,
  });
  const json = await parseResponse(res);
  return json.data;
}

/**
 * PUT /api/banner/:id — replace a banner's image
 * Confirmed response:
 *   { success: true, message: "Banner Updated Successfully", data: { _id, image, createdAt, updatedAt, __v } }
 */
export async function updateBanner(id, imageFile) {
  const formData = new FormData();
  formData.append("image", imageFile);

  const res = await fetch(`${API_BASE}/api/banner/${id}`, {
    method: "PUT",
    body: formData,
  });
  const json = await parseResponse(res);
  return json.data;
}

/** DELETE /api/banner/:id — remove a banner */
export async function deleteBanner(id) {
  const res = await fetch(`${API_BASE}/api/banner/${id}`, {
    method: "DELETE",
  });
  return parseResponse(res);
}

/**
 * Resolves a banner's Cloudinary public ID (e.g. "Bhagat/xg6ntc63jt2dtag5qqhf")
 * into a full, loadable image URL.
 */
export function bannerImageUrl(banner) {
  if (!banner?.image) return null;
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${banner.image}`;
}