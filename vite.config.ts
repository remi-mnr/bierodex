/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [
    react(), 
    tsconfigPaths(), 
    VitePWA({ 
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: [
        'favicon.svg',
        'maskable_icon_x192.png',
        'jaune.png',
        'mdr.png'
      ],
      manifest: {
        name: 'Gas App',
        short_name: 'Gas app',
        description: 'Le prix de la gasolina en direct',
        theme_color: '#10B981',
        icons: [
          {
            src: 'maskable_icon_x48.png',
            sizes: '48x48',
            type: 'image/png'
          },
          {
            src: 'maskable_icon_x72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: 'maskable_icon_x96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: 'maskable_icon_x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'maskable_icon_x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'maskable_icon_x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'maskable_icon_x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'maskable_icon_x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'maskable_icon_x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
        ],
        screenshots: [
          {
            src: 'jaune.png',
            sizes: '501x502',
            type: 'image/png',
            form_factor: "wide",
            label: 'Gilet jauné'
          },
          {
            src: 'mdr.png',
            sizes: '750x750',
            type: 'image/png',
            form_factor: "wide",
            label: 'Sale pauvre'
          },
          {
            src: 'jaune.png',
            sizes: '501x502',
            type: 'image/png',
            label: 'Gilet jauné'
          },
          {
            src: 'mdr.png',
            sizes: '750x750',
            type: 'image/png',
            label: 'Sale pauvre'
          },
        ]
      }
    })
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: '.vitest/setup',
    include: ['**/test.{ts,tsx}']
  }
})
