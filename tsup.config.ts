import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts", "src/**/*.tsx"],
  format: ["esm"],
  dts: true,
  clean: true,
  splitting: false,
  bundle: false,
  outDir: "dist",
});
