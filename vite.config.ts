import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { type InlineConfig } from 'vitest/node'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, './src/ui'),
      '@main': path.resolve(__dirname, './src/main'),
      '@static': path.resolve(__dirname, './src/static'),
      '@test': path.resolve(__dirname, './src/test'),
    },
  },
  test: {
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    environment: 'jsdom',
  },
} as UserConfig & {
  test: InlineConfig
})
