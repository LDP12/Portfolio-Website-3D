import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production'
        ? '/Portfolio-Website-3D/'
        : '/',
    plugins: [react()]
  }
})
