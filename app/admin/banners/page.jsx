"use client";

import { useEffect, useRef, useState } from "react";
import {
  getBanners,
  createBanner,
  updateBanner,
  deleteBanner,
  bannerImageUrl,
} from "@/lib/api/banner";

// Brand tokens — kept in sync with the public site
const BRAND = {
  red: "#C8202B",
  ink: "#1A1A1A",
  parchment: "#F3EEE3",
  brass: "#A9812E",
};

export default function BannerAdminPage() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [uploadFile, setUploadFile] = useState(null);
  const [uploadPreview, setUploadPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const [replacingId, setReplacingId] = useState(null); // banner._id currently mid-replace
  const [deletingId, setDeletingId] = useState(null);
  const replaceInputRef = useRef(null);
  const pendingReplaceId = useRef(null);

  const [toast, setToast] = useState(null); // { type: "success" | "error", message }

  useEffect(() => {
    loadBanners();
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  async function loadBanners() {
    setLoading(true);
    setError(null);
    try {
      const data = await getBanners();
      setBanners(data);
    } catch (err) {
      setError(err.message || "Couldn't load banners.");
    } finally {
      setLoading(false);
    }
  }

  function handleFileSelect(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadFile(file);
    setUploadPreview(URL.createObjectURL(file));
  }

  function clearUploadSelection() {
    setUploadFile(null);
    setUploadPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function handleCreate() {
    if (!uploadFile) return;
    setUploading(true);
    try {
      await createBanner(uploadFile);
      setToast({ type: "success", message: "Banner uploaded." });
      clearUploadSelection();
      await loadBanners();
    } catch (err) {
      setToast({ type: "error", message: err.message || "Upload failed." });
    } finally {
      setUploading(false);
    }
  }

  function triggerReplace(id) {
    pendingReplaceId.current = id;
    replaceInputRef.current?.click();
  }

  async function handleReplaceFileChosen(e) {
    const file = e.target.files?.[0];
    const id = pendingReplaceId.current;
    e.target.value = ""; // reset so choosing the same file again still fires onChange
    if (!file || !id) return;

    setReplacingId(id);
    try {
      await updateBanner(id, file);
      setToast({ type: "success", message: "Banner updated." });
      await loadBanners();
    } catch (err) {
      setToast({ type: "error", message: err.message || "Update failed." });
    } finally {
      setReplacingId(null);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this banner? This can't be undone.")) return;
    setDeletingId(id);
    try {
      await deleteBanner(id);
      setToast({ type: "success", message: "Banner deleted." });
      setBanners((prev) => prev.filter((b) => (b._id ?? b.id) !== id));
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
              Banner Management
            </h1>
          </div>
          <button
            onClick={loadBanners}
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

        {/* Upload new banner */}
        <section
          className="mb-10 rounded-lg border bg-white p-6"
          style={{ borderColor: "#E2D9C6" }}
        >
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide" style={{ color: BRAND.brass }}>
            Add a new banner
          </h2>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <label
              className="flex h-32 w-full max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded border-2 border-dashed text-sm text-gray-500 sm:w-56"
              style={{ borderColor: "#D8CBA9" }}
            >
              {uploadPreview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={uploadPreview} alt="Selected banner preview" className="h-full w-full object-cover" />
              ) : (
                <span>Click to choose an image</span>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileSelect}
              />
            </label>

            <div className="flex gap-3">
              <button
                onClick={handleCreate}
                disabled={!uploadFile || uploading}
                className="rounded px-5 py-2 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50"
                style={{ backgroundColor: BRAND.red }}
              >
                {uploading ? "Uploading…" : "Upload banner"}
              </button>
              {uploadFile && (
                <button
                  onClick={clearUploadSelection}
                  className="rounded border px-5 py-2 text-sm font-medium"
                  style={{ borderColor: "#D8CBA9", color: BRAND.ink }}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Hidden input reused for "replace image" on existing banners */}
        <input
          ref={replaceInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleReplaceFileChosen}
        />

        {/* Banner list */}
        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide" style={{ color: BRAND.brass }}>
            Current banners
          </h2>

          {loading && <p className="text-sm text-gray-500">Loading banners…</p>}

          {!loading && error && (
            <div
              className="rounded px-4 py-3 text-sm"
              style={{ backgroundColor: "#FBE9E9", color: BRAND.red, border: "1px solid #F0B8BC" }}
            >
              {error}
            </div>
          )}

          {!loading && !error && banners.length === 0 && (
            <p className="text-sm text-gray-500">
              No banners yet. Upload one above to get started.
            </p>
          )}

          {!loading && !error && banners.length > 0 && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {banners.map((banner) => {
                const id = banner._id ?? banner.id;
                const isReplacing = replacingId === id;
                const isDeleting = deletingId === id;
                return (
                  <div
                    key={id}
                    className="overflow-hidden rounded-lg border bg-white"
                    style={{ borderColor: "#E2D9C6" }}
                  >
                    <div className="relative h-40 w-full bg-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={bannerImageUrl(banner)}
                        alt="Banner"
                        className="h-full w-full object-cover"
                      />
                      {(isReplacing || isDeleting) && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-xs font-medium text-white">
                          {isReplacing ? "Updating…" : "Deleting…"}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between gap-2 p-3">
                      <button
                        onClick={() => triggerReplace(id)}
                        disabled={isReplacing || isDeleting}
                        className="text-xs font-semibold underline underline-offset-4 disabled:opacity-50"
                        style={{ color: BRAND.ink }}
                      >
                        Replace image
                      </button>
                      <button
                        onClick={() => handleDelete(id)}
                        disabled={isReplacing || isDeleting}
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