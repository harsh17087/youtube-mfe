import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    lib: {
      entry: 'src/main.jsx',
      name: 'youTubeMFE',
      formats: ['es', 'umd'],
      fileName: (format) => `youtubeMFE.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});