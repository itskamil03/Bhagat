// lib/api/leadershipTeam.js

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

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

/** GET /api/leadership-team/ — fetch all leadership team members */
export async function getLeadershipTeam() {
  const targetUrl = `${API_BASE}/api/leadership-team/`;
  try {
    const res = await fetch(targetUrl, {
      method: "GET",
      cache: "no-store",
    });
    const json = await parseResponse(res);
    return json.data;
  } catch (error) {
    console.error(`Failed to fetch leadership team from ${targetUrl}:`, error);
    if (error.cause) {
      console.error("Error cause:", error.cause);
    }
    throw error;
  }
}
