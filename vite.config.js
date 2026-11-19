// Import Vite's configuration helper
import { defineConfig } from 'vite';

// Import React plugin for JSX support
import react from '@vitejs/plugin-react';

// Import Tailwind CSS Vite plugin
import tailwindcss from '@tailwindcss/vite';

// Configure Vite with React and Tailwind CSS
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
