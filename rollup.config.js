import typescript from "rollup-plugin-typescript2";
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
            format: "iife",
            name: "main",
            plugins: [terser()]
        }
    ],
    context: "this",
    plugins: [nodeResolve(), commonjs(), typescript()]
};
