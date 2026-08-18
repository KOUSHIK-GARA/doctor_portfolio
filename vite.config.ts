import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Relative base so the build works from any path, including GitHub Pages
// project sites served under https://<user>.github.io/<repo>/.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
