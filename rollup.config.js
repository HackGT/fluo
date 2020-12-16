import esbuild from "rollup-plugin-esbuild";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: "src/components/index.ts",
    output: [
        {
            file: "dist/fluo.js",
            format: "esm"
        }
    ],
    context: "this",
    plugins: [nodeResolve(), commonjs(), esbuild()]
};
