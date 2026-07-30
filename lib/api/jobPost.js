// lib/api/jobPost.js

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_URL;

if (!API_BASE) {
    throw new Error("API Base URL is not defined");
}

async function parseResponse(res) {
  const text = await res.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = null;
  }
  if (!res.ok || (json && json.success === false)) {
    throw new Error(
      json?.message || `Request failed with status ${res.status}`
    );
  }
  return json;
}

export async function getJobPosts() {
  const res = await fetch(`${API_BASE}/api/job-post`, {
    method: "GET",
    cache: "no-store",
  });
  const json = await parseResponse(res);
  return json.data || json; // Handle cases where data might be directly in json or inside json.data
}
