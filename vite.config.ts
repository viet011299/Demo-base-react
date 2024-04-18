import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import path from 'path'
const __dirname = dirname(fileURLToPath(import.meta.url))
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src')}
    ]
  }
})
