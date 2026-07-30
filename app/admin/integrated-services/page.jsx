"use client";

import { useEffect, useRef, useState } from "react";
import {
  getIntegratedServices,
  createIntegratedService,
  updateIntegratedService,
  deleteIntegratedService,
} from "@/lib/api/integratedService";

// Brand tokens — kept in sync with the public site
const BRAND = {
  red: "#C8202B",
  ink: "#1A1A1A",
  parchment: "#F3EEE3",
  brass: "#A9812E",
};

export default function IntegratedServicesAdminPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form states
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
  });
  const [uploadFiles, setUploadFiles] = useState([]); // Multiple files
  const [uploadPreviews, setUploadPreviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  // Editing state
  const [editingId, setEditingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const [toast, setToast] = useState(null); // { type: "success" | "error", message }

  useEffect(() => {
    loadServices();
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  async function loadServices() {
    setLoading(true);
    setError(null);
    try {
      const data = await getIntegratedServices();
      setServices(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || "Couldn't load services.");
    } finally {
      setLoading(false);
    }
  }

  function handleFileSelect(e) {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    
    setUploadFiles(prev => [...prev, ...files]);
    
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setUploadPreviews(prev => [...prev, ...newPreviews]);
    
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function removeUploadSelection(index) {
    setUploadFiles(prev => prev.filter((_, i) => i !== index));
    setUploadPreviews(prev => prev.filter((_, i) => i !== index));
  }

  function clearForm() {
    setFormData({ title: "", category: "", description: "" });
    setUploadFiles([]);
    setUploadPreviews([]);
    setEditingId(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function handleEditSetup(service) {
    setEditingId(service._id);
    setFormData({
      title: service.title || "",
      category: service.category || "",
      description: service.description || service.desc || "",
    });
    setUploadFiles([]);
    setUploadPreviews(service.images || []); // show existing images as previews
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData.title || !formData.category || !formData.description) {
      setToast({ type: "error", message: "Please fill all text fields." });
      return;
    }
    
    // For creation, require at least one image
    if (!editingId && uploadFiles.length === 0) {
      setToast({ type: "error", message: "Please upload at least one image." });
      return;
    }

    setIsSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("title", formData.title);
      fd.append("category", formData.category);
      fd.append("description", formData.description);
      
      // Append all selected files
      uploadFiles.forEach(file => {
        fd.append("images", file);
      });

      if (editingId) {
        await updateIntegratedService(editingId, fd);
        setToast({ type: "success", message: "Service updated successfully." });
      } else {
        await createIntegratedService(fd);
        setToast({ type: "success", message: "Service created successfully." });
      }

      clearForm();
      await loadServices();
    } catch (err) {
      setToast({ type: "error", message: err.message || "Operation failed." });
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this service? This cannot be undone.")) return;
    setDeletingId(id);
    try {
      await deleteIntegratedService(id);
      setToast({ type: "success", message: "Service deleted." });
      await loadServices();
    } catch (err) {
      setToast({ type: "error", message: err.message || "Delete failed." });
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: BRAND.parchment, color: BRAND.ink }}
    >
      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between border-b pb-4" style={{ borderColor: "#E2D9C6" }}>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: BRAND.brass }}
            >
              Admin
            </p>
            <h1 className="text-2xl font-semibold" style={{ color: BRAND.ink }}>
              Integrated Services Management
            </h1>
          </div>
          <button
            onClick={loadServices}
            className="text-sm font-medium underline underline-offset-4"
            style={{ color: BRAND.ink }}
          >
            Refresh List
          </button>
        </div>

        {/* Toast */}
        {toast && (
          <div
            className="mb-6 rounded px-4 py-3 text-sm font-medium"
            style={{
              backgroundColor: toast.type === "success" ? "#EAF4EA" : "#FBE9E9",
              color: toast.type === "success" ? "#2E5C2E" : BRAND.red,
              border: `1px solid ${toast.type === "success" ? "#B9DCB9" : "#F0B8BC"}`,
            }}
          >
            {toast.message}
          </div>
        )}

        {/* Create / Edit Form */}
        <section
          className="mb-10 rounded-lg border bg-white p-6 shadow-sm"
          style={{ borderColor: "#E2D9C6" }}
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wide" style={{ color: BRAND.brass }}>
              {editingId ? "Edit Service" : "Add New Service"}
            </h2>
            {editingId && (
              <button
                type="button"
                onClick={clearForm}
                className="text-xs font-semibold underline"
                style={{ color: BRAND.red }}
              >
                Cancel Edit
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-1">
                <span className="text-sm font-medium">Title *</span>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="rounded border p-2 text-sm focus:outline-none focus:ring-2"
                  style={{ borderColor: "#E2D9C6", focusRing: BRAND.brass }}
                  placeholder="e.g., Erection and Maintenance..."
                />
              </label>

              <label className="flex flex-col gap-1">
                <span className="text-sm font-medium">Category *</span>
                <input
                  type="text"
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="rounded border p-2 text-sm focus:outline-none focus:ring-2"
                  style={{ borderColor: "#E2D9C6" }}
                  placeholder="e.g., Electrical, Turnkey"
                />
              </label>
            </div>

            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">Description *</span>
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="rounded border p-2 text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: "#E2D9C6" }}
                placeholder="Detailed description of the service..."
              />
            </label>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium">Images {editingId ? "(Uploading new replaces old)" : "*"}</span>
              
              <div className="flex flex-wrap gap-4">
                {uploadPreviews.map((src, idx) => (
                  <div key={idx} className="relative h-24 w-32 shrink-0 rounded border bg-gray-100 overflow-hidden" style={{ borderColor: "#E2D9C6" }}>
                    <img src={src} alt="Preview" className="h-full w-full object-cover" />
                    {(!editingId || uploadFiles.length > 0) && ( // Allow removal only of new files during edit for simplicity, or all if creation
                      <button
                        type="button"
                        onClick={() => removeUploadSelection(idx)}
                        className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/60 text-white text-xs hover:bg-black"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}

                <label
                  className="flex h-24 w-32 cursor-pointer flex-col items-center justify-center rounded border-2 border-dashed text-gray-500 hover:bg-gray-50 transition"
                  style={{ borderColor: "#D8CBA9" }}
                >
                  <span className="text-2xl leading-none">+</span>
                  <span className="text-xs">Add Image</span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleFileSelect}
                  />
                </label>
              </div>
            </div>

            <div className="mt-2 flex gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded px-6 py-2 text-sm font-semibold text-white transition disabled:opacity-50"
                style={{ backgroundColor: BRAND.red }}
              >
                {isSubmitting ? "Saving..." : editingId ? "Update Service" : "Create Service"}
              </button>
            </div>
          </form>
        </section>

        {/* Services List */}
        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide" style={{ color: BRAND.brass }}>
            Existing Services ({services.length})
          </h2>

          {loading && <p className="text-sm text-gray-500">Loading services...</p>}

          {!loading && error && (
            <div
              className="rounded px-4 py-3 text-sm"
              style={{ backgroundColor: "#FBE9E9", color: BRAND.red, border: "1px solid #F0B8BC" }}
            >
              {error}
            </div>
          )}

          {!loading && !error && services.length === 0 && (
            <p className="text-sm text-gray-500">
              No services found. Add one above.
            </p>
          )}

          {!loading && !error && services.length > 0 && (
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {services.map((service) => {
                const id = service._id;
                const isDeleting = deletingId === id;
                return (
                  <div
                    key={id}
                    className="flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm"
                    style={{ borderColor: "#E2D9C6" }}
                  >
                    <div className="flex h-32 w-full gap-1 overflow-x-auto bg-gray-100 p-1">
                      {service.images && service.images.length > 0 ? (
                        service.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt="Service image"
                            className="h-full w-24 shrink-0 rounded object-cover shadow-sm"
                          />
                        ))
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
                          No images
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col p-4">
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: BRAND.brass }}>
                        {service.category}
                      </span>
                      <h3 className="mb-2 mt-1 text-base font-bold text-gray-900 line-clamp-1">
                        {service.title}
                      </h3>
                      <p className="mb-4 text-xs text-gray-600 line-clamp-2">
                        {service.description || service.desc}
                      </p>
                      
                      <div className="mt-auto flex items-center justify-end gap-4 border-t pt-3" style={{ borderColor: "#E2D9C6" }}>
                        <button
                          onClick={() => handleEditSetup(service)}
                          disabled={isDeleting}
                          className="text-xs font-semibold underline underline-offset-4 disabled:opacity-50"
                          style={{ color: BRAND.ink }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(id)}
                          disabled={isDeleting}
                          className="text-xs font-semibold underline underline-offset-4 disabled:opacity-50"
                          style={{ color: BRAND.red }}
                        >
                          {isDeleting ? "Deleting..." : "Delete"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
