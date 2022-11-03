import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 配置这个只需要启动一次
import electron from 'vite-plugin-electron'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), electron({
    main: {
      entry: 'electron/index.ts'
    }
  })]
})
