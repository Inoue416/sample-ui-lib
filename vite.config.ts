import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'SampleUiLib',
      fileName: (format) =>
        format === 'es' ? 'sample-ui-lib.js' : 'sample-ui-lib.cjs',
      formats: ['es', 'cjs'],
      cssFileName: 'style',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
})
