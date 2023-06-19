import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

const genStub: Plugin = {
  name: 'gen-stub',
  apply: 'build',
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: 'ssr-stub.js',
      source: `module.exports = {}`
    })
  }
}

export default defineConfig({
  plugins: [vue(), genStub],
  build: {
    target: 'esnext',
    minify: false,
    lib: {
      name: 'vueRepl',
      entry: './src/index.ts',
      // formats: ['es'],
      // fileName: () => 'vue-repl.js'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          'vue': 'Vue',
        }
      }
    }
  }
})
