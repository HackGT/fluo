module.exports = {
    mount: {
        "src/js": "/",
        "src/components": "/components",
        _site: "/"
    },
    plugins: [
        [
            "@snowpack/plugin-run-script",
            { cmd: "eleventy", watch: "$1 --watch" }
        ],
        [ "@intrnl/snowpack-bundle-rollup"],
    ],
    buildOptions: {
        clean: true
    }
};
