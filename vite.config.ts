import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'lms-api-client',       // Global variable name for UMD builds
      fileName: (format) => `lms-api-client.${format}.js`, // Output file name pattern
    },
    rollupOptions: {
      // Ensure external dependencies aren't bundled
      external: ['axios'], // Add other external libraries here
      output: {
        globals: {
          axios: 'axios', // Global variable for external libraries
        },
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true, // Generate types entry file
    }),
  ],
});
