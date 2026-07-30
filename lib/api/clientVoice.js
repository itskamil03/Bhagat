// lib/api/clientVoice.js

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
 * Fetch all client voices
 */
export async function getClientVoices() {
  const res = await fetch(`${API_BASE}/api/client-voice`,);

  const json = await parseResponse(res);

  return json.data;
}

/**
 * POST
 * Create client voice
 */
export async function createClientVoice(formData) {
  const res = await fetch(`${API_BASE}/api/client-voice/create`, {
    method: "POST",
    body: formData,
  });

  const json = await parseResponse(res);

  return json.data;
}

/**
 * PUT
 * Update client voice
 */
export async function updateClientVoice(id, formData) {
  const res = await fetch(`${API_BASE}/api/client-voice/${id}`, {
    method: "PUT",
    body: formData,
  });

  const json = await parseResponse(res);

  return json.data;
}

/**
 * DELETE
 * Delete client voice
 */
export async function deleteClientVoice(id) {
  const res = await fetch(`${API_BASE}/api/client-voice/${id}`, {
    method: "DELETE",
  });

  const json = await parseResponse(res);

  return json;
}

/**
 * Return Cloudinary URL for company image
 */
export function clientVoiceImageUrl(clientVoice) {
  return clientVoice?.companyImage || "";
}
