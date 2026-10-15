import { defineConfig } from 'vite';
export default defineConfig(({ command }) => ({
  // GitHub Pages uses a repository subpath; Tauri needs root-relative assets.
  base: command === 'build' && process.env.TAURI_ENV_PLATFORM ? '/' : '/inbox-reborn/',
  build: { outDir: 'dist', emptyOutDir: true },
}));
