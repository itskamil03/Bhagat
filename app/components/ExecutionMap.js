"use client";

import dynamic from "next/dynamic";

// Dynamically import the actual map component with SSR disabled
const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[300px] sm:min-h-[400px] bg-gray-100 flex items-center justify-center animate-pulse rounded-xl border border-gray-200">
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 border-4 border-gray-300 border-t-[#E61B23] rounded-full animate-spin"></div>
        <span className="text-gray-400 font-semibold text-sm">Loading Interactive Map...</span>
      </div>
    </div>
  ),
});

export default function ExecutionMap() {
  return <MapComponent />;
}
