// lib/api/aboutHead.js

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

if (!API_BASE) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

async function parseResponse(res) {
  const text = await res.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = null;
  }

  if (!res.ok || json?.success === false) {
    throw new Error(json?.message || `Request failed with status ${res.status}`);
  }

  return json;
}

export async function getAboutHeads() {
  const res = await fetch(`${API_BASE}/api/about-head`, {
    method: "GET",
    cache: "no-store",
  });
  const json = await parseResponse(res);
  return json.data;
}

export async function createAboutHead(formData) {
  const res = await fetch(`${API_BASE}/api/about-head/create`, {
    method: "POST",
    body: formData,
  });
  return parseResponse(res);
}

export async function updateAboutHead(id, formData) {
  const res = await fetch(`${API_BASE}/api/about-head/${id}`, {
    method: "PUT",
    body: formData,
  });
  return parseResponse(res);
}

export async function deleteAboutHead(id) {
  const res = await fetch(`${API_BASE}/api/about-head/${id}`, {
    method: "DELETE",
  });
  return parseResponse(res);
}
