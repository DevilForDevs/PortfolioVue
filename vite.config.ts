import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target: "https://ranjankumar.xyz",
        changeOrigin: true,
        secure: false, // allow self-signed/https
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
