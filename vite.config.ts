import { defineConfig, loadEnv } from 'vite';
import dts from 'vite-plugin-dts';
import { viteAlias } from './vite.alias';

export default defineConfig(({ mode }) => {
  const envDir = process.cwd() + '/environments';
  const env = loadEnv(mode, envDir);

  return {
    build: {
      lib: {
        entry: 'src/index.ts',
        name: 'lms-api-client',
        fileName: (format) => `lms-api-client.${format}.js`, // Output file name pattern
      },
      rollupOptions: {
        external: ['axios'],
        output: {
          globals: {
            axios: 'axios',
          },
        },
      },
    },

    plugins: [
      dts({
        insertTypesEntry: true, // Generate types entry file
      }),
    ],

    resolve: {
      alias: viteAlias,
    },

    envDir: envDir,

  }
});
