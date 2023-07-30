import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "https://saikrishnatbijil.github.io/cakelbakes/"
  base: "https://cakelbakes.com/"
})
