/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@adapters': path.resolve(__dirname, 'src/Adapters'),
      '@apis': path.resolve(__dirname, 'src/APIs'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/Components'),
      '@config': path.resolve(__dirname, 'src/Config'),
      '@constants': path.resolve(__dirname, 'src/Constants'),
      '@hooks': path.resolve(__dirname, 'src/Hooks'),
      '@i18n': path.resolve(__dirname, 'src/I18n'),
      '@layouts': path.resolve(__dirname, 'src/Layouts'),
      '@modules': path.resolve(__dirname, 'src/Modules'),
      '@routes': path.resolve(__dirname, 'src/Routes'),
      '@stores': path.resolve(__dirname, 'src/Stores'),
      '@themes': path.resolve(__dirname, 'src/Themes'),
      '@type': path.resolve(__dirname, 'src/Type'),
      '@utils': path.resolve(__dirname, 'src/Utils'),
    },
  },
});
