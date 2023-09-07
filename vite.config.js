import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-phonebook-hooks/',
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
