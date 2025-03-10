import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output directory
    rollupOptions: {
      input: './index.html', // Tell Vite where to find index.html
    },
  },
})
