import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { type InlineConfig } from 'vitest'
import { type UserConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    environment: 'jsdom',
  },
} as UserConfig & {
  test: InlineConfig
})
