import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://Lautaro-Balda.github.com/RickAndMorty",
  plugins: [react()],
})
