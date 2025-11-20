import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,                  // allow access from any network (important)
    port: 8080,                  // or your preferred dev port
    strictPort: true,            // ensures same port each time
    cors: true,                  // enables cross-origin requests
    allowedHosts: [""], // ✅ allow all ngrok subdomains
    hmr: {
      clientPort: 443,           // fixes HTTPS ngrok HMR issues
    },
  },
})
