import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import typescript from "rollup-plugin-typescript2";

export default defineConfig({
  esbuild: false,
  plugins: [
    typescript({
      check: false,
      // sourceMap: false,
    }),
    sveltekit(),
  ],
});
