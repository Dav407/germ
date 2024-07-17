import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api':{
        target: 'http://localhost:3000',
        secure: false,  // if your backend API uses https, you need to set this to true
      },
    },
  },
  plugins: [react()],
})
