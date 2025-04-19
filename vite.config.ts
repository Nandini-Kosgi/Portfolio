import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5173, // Ensure this matches the port you're using
    open: true, // Automatically opens the browser
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
