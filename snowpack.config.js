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
        ]
    ]
};
