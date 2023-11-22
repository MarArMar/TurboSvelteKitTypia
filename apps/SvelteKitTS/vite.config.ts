import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import typescript from "rollup-plugin-typescript2";

export default defineConfig({
  esbuild: false,
  plugins: [
    typescript({
      check: false,

      tsconfig: "tsconfig.json", // Is the default, would throw an error if tsconfig was not found

      // No effect
      // noEmit: true,
      // allowImportingTsExtensions: true,

      // No effect
      // sourceMap: false,
    }),
    sveltekit(),
  ],
});
