// lib/api/highMastPortfolio.js

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

export async function getHighMastPortfolio() {
  const res = await fetch(`${API_BASE}/api/servo-stabilizers-portfolio`, {
    method: "GET",
    cache: "no-store",
  });
  
  const json = await parseResponse(res);
  return json.data;
}
