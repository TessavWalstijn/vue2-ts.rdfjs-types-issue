/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue2-jsx'
import { createVuePlugin } from 'vite-plugin-vue2'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import path from 'path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)

export default defineConfig({
  // transpileDependencies: ['vue2-storage'],
  plugins: [createVuePlugin(), vueJsx(), ScriptSetup()],
  server: {
    host: '127.0.0.1',
  },
  define: {
    'process.env': process.env,
  },
  resolve: {
    mainFields: [
      'module',
      'main',
      'jsnext:main',
      'jsnext',
      'browser',
      'types', // NOTE: Added for dependencie @rdfjs/types
    ],
    extensions: [
      '.mjs',
      '.js',
      '.mts',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
      '.d.ts',
      '.vue',
      '.sass', // NOTE: Added for dependencies
    ],
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: 'buffer',
        replacement: require.resolve('buffer'),
      },
      {
        find: 'util',
        replacement: require.resolve('util'),
      },
    ],
  },
  build: {
    cssCodeSplit: true,
  },
  esbuild: {
    loader: 'tsx',
  },
  exports: {
    '.': {
      import: './index.js',
      require: './index.cjs',
    },
  },
})
