// lib/api/certificate.js

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

if (!API_BASE) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

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
 * Fetch all certificates
 */
export async function getCertificates() {
  const res = await fetch(`${API_BASE}/api/certificate/`, {
    method: "GET",
    cache: "no-store",
  });

  const json = await parseResponse(res);

  return json.data;
}

/**
 * POST
 * Create certificate
 */
export async function createCertificate(formData) {
  const res = await fetch(`${API_BASE}/api/certificate/create`, {
    method: "POST",
    body: formData,
  });

  const json = await parseResponse(res);

  return json.data;
}

/**
 * PUT
 * Update certificate
 */
export async function updateCertificate(id, formData) {
  const res = await fetch(`${API_BASE}/api/certificate/${id}`, {
    method: "PUT",
    body: formData,
  });

  const json = await parseResponse(res);

  return json.data;
}

/**
 * DELETE
 * Delete certificate
 */
export async function deleteCertificate(id) {
  const res = await fetch(`${API_BASE}/api/certificate/${id}`, {
    method: "DELETE",
  });

  const json = await parseResponse(res);

  return json;
}

/**
 * Return Cloudinary URL for certificate
 */
export function certificatePdfUrl(certificate) {
  const url = certificate?.pdf || "";
  if (!url) return "/placeholder.jpg"; // Fallback to avoid empty src
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/")) {
    return url;
  }
  // Next.js Image component requires relative URLs to start with a leading slash
  return `/${url}`;
}
