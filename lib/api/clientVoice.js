// lib/api/clientVoice.js
import { getFriendlyErrorMessage } from "./errorMessage";

const API_BASE = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

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
      getFriendlyErrorMessage(
        json?.message || `Request failed with status ${res.status}`,
      ),
    );
  }

  return json;
}

/**
 * GET
 * Fetch all client voices
 */
export async function getClientVoices() {
  const res = await fetch(`${API_BASE}/api/client-voice`, {
    method: "GET",
    cache: "no-store",
  });

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

function encodePath(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}

/**
 * Return the downloadable PDF URL for a client voice.
 */
export function clientVoiceDocumentUrl(clientVoice) {
  const documentPath = clientVoice?.document || clientVoice?.pdf || "";
  if (!documentPath) return "";

  if (/^(https?:|blob:|data:)/i.test(documentPath)) {
    return documentPath;
  }

  if (documentPath.startsWith("/")) {
    return `${API_BASE}${documentPath}`;
  }

  // Local uploads are just bare filenames now — point straight at the static folder
  return `${API_BASE}/uploads/clientVoice/${encodeURIComponent(documentPath)}`;
}

export function clientVoiceDocumentFileName(clientVoice) {
  const documentPath = clientVoice?.document || clientVoice?.pdf || "";
  if (!documentPath) return "case-study.pdf";

  try {
    const url = new URL(documentPath);
    const filename = url.pathname.split("/").filter(Boolean).pop();
    return filename || "case-study.pdf";
  } catch {
    return documentPath.split("/").filter(Boolean).pop() || "case-study.pdf";
  }
}
