// lib/api/infrastructureGallery.js

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

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

export async function getInfrastructureGalleries() {
  const res = await fetch(`${API_BASE}/api/infrastructure-gallery`, {
    method: "GET",
    cache: "no-store",
  });
  const json = await parseResponse(res);
  return json.data;
}

export async function getInfrastructureGallery(id) {
  if (!id) return null;
  
  const requestUrl = `${API_BASE}/api/infrastructure-gallery/${id}`;
  
  console.log("NEXT_PUBLIC_API_BASE_URL:", process.env.NEXT_PUBLIC_API_BASE_URL);
  console.log("ID passed:", id);
  console.log("Request URL:", requestUrl);

  const res = await fetch(requestUrl, {
    method: "GET",
    cache: "no-store",
  });

  const json = await parseResponse(res);
  return json.data;
}
