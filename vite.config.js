import { VitePWA } from 'vite-plugin-pwa'

export default {
  server: {
    host: '0.0.0.0',
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ url }) => {
              return url.pathname.startsWith("/api");
            },
            handler: "CacheFirst",
            options: {
              cacheName: "api-cache",
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      includeAssets: [
        "**/*",
      ],
      manifest: {
        "name": "Leaf Tale",
        "short_name": "Leaf Tale",
        "start_url": ".",
        "theme_color": "black",
        "display": "standalone",
        "background_color": "#000000",
        "orientation": "landscape-primary",
        "description": "El cuento de una hoja y una abeja.",
        "icons": [
          {
            "src": "./img/icon/48.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "./img/icon/72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "./img/icon/92.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "./img/icon/144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "./img/icon/167.png",
            "sizes": "168x168",
            "type": "image/png"
          },
          {
            "src": "./img/icon/196.png",
            "sizes": "192x192",
            "type": "image/png"
          }
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ]
}