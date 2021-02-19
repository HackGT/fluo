module.exports = function(eleventyConfig) {
    // because we want to passthrough dist folder
    eleventyConfig.setUseGitIgnore(false);
    
    // passthrough all files in dist/fluo to dist directory of site output
    eleventyConfig.addPassthroughCopy({ "dist/fluo": "dist" });

    // passthrough assets
    eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
    return {
        dir: {
            input: "src", 
            output: "www",
        }
    }
}
