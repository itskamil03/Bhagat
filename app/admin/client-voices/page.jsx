"use client";

import { useEffect, useRef, useState } from "react";
import {
  getClientVoices,
  createClientVoice,
  updateClientVoice,
  deleteClientVoice,
  clientVoiceImageUrl,
} from "@/lib/api/clientVoice";

// Brand tokens
const BRAND = {
  red: "#C8202B",
  ink: "#1A1A1A",
  parchment: "#F3EEE3",
  brass: "#A9812E",
};

export default function ClientVoiceAdminPage() {
  const [voices, setVoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form states
  const [uploadImage, setUploadImage] = useState(null);
  const [uploadImagePreview, setUploadImagePreview] = useState(null);
  const [description, setDescription] = useState("");
  const [uploadPdf, setUploadPdf] = useState(null);
  
  const [uploading, setUploading] = useState(false);
  
  const imageInputRef = useRef(null);
  const pdfInputRef = useRef(null);

  const [deletingId, setDeletingId] = useState(null);
  const [toast, setToast] = useState(null); // { type: "success" | "error", message }

  useEffect(() => {
    loadVoices();
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  async function loadVoices() {
    setLoading(true);
    setError(null);
    try {
      const data = await getClientVoices();
      setVoices(data || []);
    } catch (err) {
      setError(err.message || "Couldn't load client voices.");
    } finally {
      setLoading(false);
    }
  }

  function handleImageSelect(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadImage(file);
    setUploadImagePreview(URL.createObjectURL(file));
  }

  function handlePdfSelect(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadPdf(file);
  }

  function clearUploadSelection() {
    setUploadImage(null);
    setUploadImagePreview(null);
    setDescription("");
    setUploadPdf(null);
    if (imageInputRef.current) imageInputRef.current.value = "";
    if (pdfInputRef.current) pdfInputRef.current.value = "";
  }

  async function handleCreate(e) {
    e.preventDefault();
    if (!uploadImage) {
      setToast({ type: "error", message: "Company image is required." });
      return;
    }
    if (!description) {
      setToast({ type: "error", message: "Description is required." });
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("companyImage", uploadImage);
      formData.append("description", description);
      if (uploadPdf) {
        formData.append("pdf", uploadPdf);
      }

      await createClientVoice(formData);
      setToast({ type: "success", message: "Client voice created." });
      clearUploadSelection();
      await loadVoices();
    } catch (err) {
      setToast({ type: "error", message: err.message || "Creation failed." });
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this client voice? This can't be undone.")) return;
    setDeletingId(id);
    try {
      await deleteClientVoice(id);
      setToast({ type: "success", message: "Client voice deleted." });
      setVoices((prev) => prev.filter((v) => (v._id ?? v.id) !== id));
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
              Client Voice Management
            </h1>
          </div>
          <button
            onClick={loadVoices}
            className="text-sm font-medium underline underline-offset-4"
            style={{ color: BRAND.ink }}
          >
            Refresh
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

        {/* Create new Client Voice */}
        <section
          className="mb-10 rounded-lg border bg-white p-6"
          style={{ borderColor: "#E2D9C6" }}
        >
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide" style={{ color: BRAND.brass }}>
            Add a new Client Voice
          </h2>

          <form onSubmit={handleCreate} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Image Upload */}
              <div className="flex-shrink-0">
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Image (Logo) *</label>
                <label
                  className="flex h-32 w-full sm:w-56 cursor-pointer items-center justify-center overflow-hidden rounded border-2 border-dashed text-sm text-gray-500"
                  style={{ borderColor: "#D8CBA9" }}
                >
                  {uploadImagePreview ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={uploadImagePreview} alt="Selected preview" className="h-full w-full object-contain p-2" />
                  ) : (
                    <span className="px-4 text-center">Click to choose image</span>
                  )}
                  <input
                    ref={imageInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageSelect}
                    required
                  />
                </label>
              </div>

              {/* Text fields */}
              <div className="flex flex-col gap-4 flex-grow">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-1"
                    style={{ borderColor: "#D8CBA9" }}
                    rows={4}
                    placeholder="Enter testimonial description..."
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">PDF Case Study (Optional)</label>
                  <input
                    ref={pdfInputRef}
                    type="file"
                    accept="application/pdf"
                    onChange={handlePdfSelect}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-2">
              <button
                type="submit"
                disabled={uploading}
                className="rounded px-5 py-2 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50"
                style={{ backgroundColor: BRAND.red }}
              >
                {uploading ? "Creating…" : "Create Client Voice"}
              </button>
              <button
                type="button"
                onClick={clearUploadSelection}
                className="rounded border px-5 py-2 text-sm font-medium"
                style={{ borderColor: "#D8CBA9", color: BRAND.ink }}
              >
                Clear
              </button>
            </div>
          </form>
        </section>

        {/* Client Voices list */}
        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide" style={{ color: BRAND.brass }}>
            Current Client Voices
          </h2>

          {loading && <p className="text-sm text-gray-500">Loading client voices…</p>}

          {!loading && error && (
            <div
              className="rounded px-4 py-3 text-sm"
              style={{ backgroundColor: "#FBE9E9", color: BRAND.red, border: "1px solid #F0B8BC" }}
            >
              {error}
            </div>
          )}

          {!loading && !error && voices.length === 0 && (
            <p className="text-sm text-gray-500">
              No client voices yet. Add one above to get started.
            </p>
          )}

          {!loading && !error && voices.length > 0 && (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {voices.map((voice) => {
                const id = voice._id ?? voice.id;
                const isDeleting = deletingId === id;
                return (
                  <div
                    key={id}
                    className="overflow-hidden rounded-lg border bg-white p-4 flex flex-col gap-4"
                    style={{ borderColor: "#E2D9C6" }}
                  >
                    <div className="flex gap-4 items-start">
                      <div className="w-24 h-24 bg-gray-100 flex-shrink-0 rounded border flex items-center justify-center p-2 relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={clientVoiceImageUrl(voice)}
                          alt="Company Logo"
                          className="max-h-full max-w-full object-contain"
                        />
                        {isDeleting && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-xs font-medium text-white rounded">
                            Deleting…
                          </div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm text-gray-800 line-clamp-3 mb-2">
                          "{voice.description}"
                        </p>
                        {voice.pdf && (
                          <a href={voice.pdf} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 hover:underline">
                            View PDF
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-end border-t pt-3 mt-auto" style={{ borderColor: "#E2D9C6" }}>
                      <button
                        onClick={() => handleDelete(id)}
                        disabled={isDeleting}
                        className="text-xs font-semibold underline underline-offset-4 disabled:opacity-50"
                        style={{ color: BRAND.red }}
                      >
                        Delete
                      </button>
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
