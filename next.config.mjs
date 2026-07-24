/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: false, // Disables the static/route status indicator badge (the circular "N" logo)
    buildActivity: false, // Disables the compiling build activity indicator
  },
  turbopack: {
    root: "C:/Users/kamil/Desktop/bhagat_website-main",
  },
};

nextConfig.images = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "res.cloudinary.com",
    },
  ],
};

export default nextConfig;
