// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  image: {
    domains: ["fakelogo.com", "api.dicebear.com"],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});