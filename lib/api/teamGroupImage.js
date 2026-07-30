// lib/api/teamGroupImage.js

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

/** GET /api/team-group-image/ */
export async function getTeamGroupImage() {
  const targetUrl = `${API_BASE}/api/team-group-image/`;
  try {
    const res = await fetch(targetUrl, {
      method: "GET",
      cache: "no-store",
    });
    const json = await parseResponse(res);
    return json.data;
  } catch (error) {
    console.error(`Failed to fetch team group image from ${targetUrl}:`, error);
    if (error.cause) {
      console.error("Error cause:", error.cause);
    }
    throw error;
  }
}

/** POST /api/team-group-image/create */
export async function createTeamGroupImage(imageFile) {
  const formData = new FormData();
  formData.append("groupImage", imageFile);

  const res = await fetch(`${API_BASE}/api/team-group-image/create`, {
    method: "POST",
    body: formData,
  });
  const json = await parseResponse(res);
  return json.data;
}

/** PUT /api/team-group-image/:id */
export async function updateTeamGroupImage(id, imageFile) {
  const formData = new FormData();
  formData.append("groupImage", imageFile);

  const res = await fetch(`${API_BASE}/api/team-group-image/${id}`, {
    method: "PUT",
    body: formData,
  });
  const json = await parseResponse(res);
  return json.data;
}

/** DELETE /api/team-group-image/:id */
export async function deleteTeamGroupImage(id) {
  const res = await fetch(`${API_BASE}/api/team-group-image/${id}`, {
    method: "DELETE",
  });
  return parseResponse(res);
}
