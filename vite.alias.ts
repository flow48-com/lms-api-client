import { AliasOptions } from 'vite';
import path from 'path';

export const viteAlias: AliasOptions = {
  components: path.resolve(__dirname, './src/components'),
  utils: path.resolve(__dirname, './src/utils'),
  types: path.resolve(__dirname, './src/types'),
  clients: path.resolve(__dirname, './src/clients'),
  schemas: path.resolve(__dirname, './src/schemas'),

  // Aliases for the config files
  generated: path.resolve(__dirname, './src/generated'),
};
