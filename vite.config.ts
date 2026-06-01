import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    adapter: 'static',
    prerender: {
      routes: ['/', '/about', '/services', '/contact', '/staff'],
      crawl: true, // This ensures HTML files are generated
    },
  },
  build: {
    outDir: 'dist/client',
  },
});
