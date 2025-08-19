import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  root: '.',
  optimizeDeps: {
    // Ensure ESM plugin is handled correctly
    include: ['@vitejs/plugin-react'],
    esbuildOptions: {
      // Node.js 18 workaround for ESM plugins
      plugins: [],
    },
  },
});
