import esbuild from "rollup-plugin-esbuild";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
    input: "src/components/index.ts",
    output: [
        {
            file: "dist/fluo.js",
            format: "esm"
        },
        {
            file: "dist/fluo.min.js",
            format: "esm",
            plugins: [terser()]
        }
    ],
    context: "this",
    plugins: [nodeResolve(), commonjs(), esbuild()]
};
