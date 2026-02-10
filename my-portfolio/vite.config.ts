import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),

    // ✅ enables "~icons/..." imports
    Icons({
      compiler: 'vue3',
    }),

    // ✅ optional but nice: lets you use <IconLogosPhp /> without manual import
    Components({
      dts: 'src/components.d.ts',
      resolvers: [
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
