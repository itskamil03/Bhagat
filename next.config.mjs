/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: false, // Disables the static/route status indicator badge (the circular "N" logo)
    buildActivity: false, // Disables the compiling build activity indicator
  },
};

export default nextConfig;
