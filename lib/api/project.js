// lib/api/project.js

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

/**
 * Parses API responses.
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
 * Fetch all projects
 */
export async function getProjects() {
  const res = await fetch(`${API_BASE}/api/project`, {
    method: "GET",
    cache: "no-store",
  });

  const json = await parseResponse(res);
  return json.data;
}

/**
 * GET
 * Fetch projects by status
 */
export async function getProjectsByStatus(status) {
  const res = await fetch(`${API_BASE}/api/Project/status/${status}`, {
    method: "GET",
    cache: "no-store",
  });

  const json = await parseResponse(res);
  return json.data;
}

/**
 * GET
 * Fetch project by id
 */
export async function getProjectById(id) {
  const res = await fetch(`${API_BASE}/api/project/${id}`, {
    method: "GET",
    cache: "no-store",
  });

  const json = await parseResponse(res);
  return json.data;
}

/**
 * POST
 * Create project
 */
export async function createProject(formData) {
  const res = await fetch(`${API_BASE}/api/project/create`, {
    method: "POST",
    body: formData,
  });

  const json = await parseResponse(res);
  return json.data;
}

/**
 * PUT
 * Update project
 */
export async function updateProject(id, formData) {
  const res = await fetch(`${API_BASE}/api/project/update/${id}`, {
    method: "PUT",
    body: formData,
  });

  const json = await parseResponse(res);
  return json.data;
}

/**
 * DELETE
 * Delete project
 */
export async function deleteProject(id) {
  const res = await fetch(`${API_BASE}/api/project/delete/${id}`, {
    method: "DELETE",
  });

  const json = await parseResponse(res);
  return json;
}
