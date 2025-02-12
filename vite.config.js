import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/desarrollo-frontend-react-2025/', // Asegúrate de que coincida con el nombre de tu repositorio
});