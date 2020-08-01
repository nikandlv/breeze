import typescript from "@rollup/plugin-typescript";
import multi from "@rollup/plugin-multi-entry";

export default {
  input: ["src/index.ts"],
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    typescript({
      rootDir: "src",
      outDir: "dist/types",
    }),
  ],
};
