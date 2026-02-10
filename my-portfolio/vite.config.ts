import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

import Icons from 'unplugin-icons/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),

    // Auto-import icon components (optional but nice)
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: ['vue'],
      resolvers: [
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),

    // Enables ~icons/* imports
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
