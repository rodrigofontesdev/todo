import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, type UserConfig } from 'vite'
import { type InlineConfig } from 'vitest/node'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, './src/ui'),
      '@main': path.resolve(__dirname, './src/main'),
      '@static': path.resolve(__dirname, './src/static'),
      '@test': path.resolve(__dirname, './src/test'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
  test: {
    globals: true,
    setupFiles: ['./src/test/vitest-setup.ts'],
    environment: 'jsdom',
  },
} as UserConfig & {
  test: InlineConfig
})
