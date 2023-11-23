import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import typescript from "rollup-plugin-typescript2";
// import tspCompiler from "ts-patch/compiler";

export default defineConfig({
  esbuild: false,
  plugins: [
    typescript({
      // No effect
      // typescript: tspCompiler,
      tsconfig: "tsconfig.json", // Is the default, would throw an error if tsconfig was not found

      // No effect
      // check: false,

      // No effect
      include: ["../../**/*.ts+(|x)"],
      // include: ["*.ts+(|x)", "**/*.ts+(|x)", "**/*.cts", "**/*.mts"],
      exclude: ["../../**/node_modules/**/*"],

      // No effect
      // noEmit: true,
      // allowImportingTsExtensions: true,

      // No effect
      // sourceMap: false,
    }),
    sveltekit(),
  ],
});
