import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    adapter: "static",
    prerender: {
      routes: ["/"],
      crawl: true,
    },
  },
  build: {
    outDir: "dist/client",
  },
});
