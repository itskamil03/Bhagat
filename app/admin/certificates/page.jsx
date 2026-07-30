"use client";

import { useEffect, useRef, useState } from "react";
import {
  getCertificates,
  createCertificate,
  updateCertificate,
  deleteCertificate,
  certificatePdfUrl,
} from "@/lib/api/certificate";

// Brand tokens
const BRAND = {
  red: "#C8202B",
  ink: "#1A1A1A",
  parchment: "#F3EEE3",
  brass: "#A9812E",
};

export default function CertificateAdminPage() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Search and Pagination states
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Form states for creation
  const [uploadFile, setUploadFile] = useState(null);
  const [uploadPreview, setUploadPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  // States for update (replace)
  const [replacingId, setReplacingId] = useState(null);
  const replaceInputRef = useRef(null);
  const pendingReplaceId = useRef(null);

  // States for deletion
  const [deletingId, setDeletingId] = useState(null);

  const [toast, setToast] = useState(null); // { type: "success" | "error", message }

  useEffect(() => {
    loadCertificates();
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  // Reset pagination when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  async function loadCertificates() {
    setLoading(true);
    setError(null);
    try {
      const data = await getCertificates();
      setCertificates(data || []);
    } catch (err) {
      setError(err.message || "Couldn't load certificates.");
    } finally {
      setLoading(false);
    }
  }

  function handleFileSelect(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadFile(file);
    if (file.type.startsWith("image/")) {
      setUploadPreview(URL.createObjectURL(file));
    } else {
      setUploadPreview(null);
    }
  }

  function clearUploadSelection() {
    setUploadFile(null);
    setUploadPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function handleCreate(e) {
    e.preventDefault();
    if (!uploadFile) {
      setToast({ type: "error", message: "Please select a file to upload." });
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("pdf", uploadFile);

      await createCertificate(formData);
      setToast({ type: "success", message: "Certificate created successfully." });
      clearUploadSelection();
      await loadCertificates();
    } catch (err) {
      setToast({ type: "error", message: err.message || "Creation failed." });
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
    e.target.value = ""; 
    if (!file || !id) return;

    setReplacingId(id);
    try {
      const formData = new FormData();
      formData.append("pdf", file);
      
      await updateCertificate(id, formData);
      setToast({ type: "success", message: "Certificate updated successfully." });
      await loadCertificates();
    } catch (err) {
      setToast({ type: "error", message: err.message || "Update failed." });
    } finally {
      setReplacingId(null);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this certificate? This action cannot be undone.")) return;
    setDeletingId(id);
    try {
      await deleteCertificate(id);
      setToast({ type: "success", message: "Certificate deleted." });
      setCertificates((prev) => prev.filter((c) => (c._id ?? c.id) !== id));
      
      // Handle pagination edge case when deleting last item on page
      const newTotalItems = certificates.length - 1;
      const maxPages = Math.ceil(newTotalItems / itemsPerPage) || 1;
      if (currentPage > maxPages) {
        setCurrentPage(maxPages);
      }
    } catch (err) {
      setToast({ type: "error", message: err.message || "Delete failed." });
    } finally {
      setDeletingId(null);
    }
  }

  // Filter and Pagination Logic
  const filteredCertificates = certificates.filter((c) => {
    // If the API provided original file names or titles, we could search those.
    // For now, search by ID or just if it exists, as certificates mostly just have 'pdf' URL.
    if (!searchTerm) return true;
    return (c._id ?? c.id)?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const totalPages = Math.ceil(filteredCertificates.length / itemsPerPage) || 1;
  const paginatedCertificates = filteredCertificates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
              Certificate Management
            </h1>
          </div>
          <button
            onClick={loadCertificates}
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

        {/* Upload new Certificate */}
        <section
          className="mb-10 rounded-lg border bg-white p-6"
          style={{ borderColor: "#E2D9C6" }}
        >
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide" style={{ color: BRAND.brass }}>
            Upload new Certificate
          </h2>

          <form onSubmit={handleCreate} className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <label
              className="flex h-32 w-full max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded border-2 border-dashed text-sm text-gray-500 sm:w-56"
              style={{ borderColor: "#D8CBA9" }}
            >
              {uploadPreview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={uploadPreview} alt="Selected preview" className="h-full w-full object-cover" />
              ) : uploadFile ? (
                <span className="px-4 text-center break-words w-full">{uploadFile.name}</span>
              ) : (
                <span className="px-4 text-center">Click to choose image or PDF</span>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,application/pdf"
                className="hidden"
                onChange={handleFileSelect}
                required
              />
            </label>

            <div className="flex gap-3 mt-4 sm:mt-0">
              <button
                type="submit"
                disabled={!uploadFile || uploading}
                className="rounded px-5 py-2 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50"
                style={{ backgroundColor: BRAND.red }}
              >
                {uploading ? "Uploading…" : "Upload Certificate"}
              </button>
              {uploadFile && (
                <button
                  type="button"
                  onClick={clearUploadSelection}
                  className="rounded border px-5 py-2 text-sm font-medium"
                  style={{ borderColor: "#D8CBA9", color: BRAND.ink }}
                >
                  Clear
                </button>
              )}
            </div>
          </form>
        </section>

        {/* Hidden input reused for "replace" on existing certificates */}
        <input
          ref={replaceInputRef}
          type="file"
          accept="image/*,application/pdf"
          className="hidden"
          onChange={handleReplaceFileChosen}
        />

        {/* Certificates list with Search & Pagination */}
        <section>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide" style={{ color: BRAND.brass }}>
              Current Certificates
            </h2>
            <div className="w-full sm:w-64">
              <input 
                type="text" 
                placeholder="Search ID..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-1"
                style={{ borderColor: "#D8CBA9" }}
              />
            </div>
          </div>

          {loading && <p className="text-sm text-gray-500">Loading certificates…</p>}

          {!loading && error && (
            <div
              className="rounded px-4 py-3 text-sm"
              style={{ backgroundColor: "#FBE9E9", color: BRAND.red, border: "1px solid #F0B8BC" }}
            >
              {error}
            </div>
          )}

          {!loading && !error && filteredCertificates.length === 0 && (
            <p className="text-sm text-gray-500">
              No certificates found.
            </p>
          )}

          {!loading && !error && filteredCertificates.length > 0 && (
            <>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedCertificates.map((certificate) => {
                  const id = certificate._id ?? certificate.id;
                  const isReplacing = replacingId === id;
                  const isDeleting = deletingId === id;
                  const url = certificatePdfUrl(certificate);
                  const isPdf = url.toLowerCase().endsWith('.pdf');
                  
                  return (
                    <div
                      key={id}
                      className="overflow-hidden rounded-lg border bg-white flex flex-col"
                      style={{ borderColor: "#E2D9C6" }}
                    >
                      <div className="relative h-48 w-full bg-gray-100 flex items-center justify-center border-b" style={{ borderColor: "#E2D9C6" }}>
                        {isPdf ? (
                          <div className="text-gray-400 font-medium">PDF Document</div>
                        ) : (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={url}
                            alt="Certificate"
                            className="h-full w-full object-contain p-2"
                          />
                        )}
                        {(isReplacing || isDeleting) && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-xs font-medium text-white">
                            {isReplacing ? "Updating…" : "Deleting…"}
                          </div>
                        )}
                      </div>
                      
                      <div className="p-3 flex-grow flex flex-col justify-between">
                        <div className="text-xs text-gray-500 break-all mb-4">
                          ID: {id}
                        </div>
                        
                        <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-1">
                          <a 
                            href={url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-xs font-semibold underline underline-offset-4"
                            style={{ color: BRAND.ink }}
                          >
                            View
                          </a>
                          
                          <div className="flex gap-3">
                            <button
                              onClick={() => triggerReplace(id)}
                              disabled={isReplacing || isDeleting}
                              className="text-xs font-semibold underline underline-offset-4 disabled:opacity-50"
                              style={{ color: BRAND.brass }}
                            >
                              Edit
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
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center items-center gap-4">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 text-sm border rounded disabled:opacity-50"
                    style={{ borderColor: "#D8CBA9", color: BRAND.ink }}
                  >
                    Previous
                  </button>
                  <span className="text-sm font-medium" style={{ color: BRAND.ink }}>
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 text-sm border rounded disabled:opacity-50"
                    style={{ borderColor: "#D8CBA9", color: BRAND.ink }}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
}
