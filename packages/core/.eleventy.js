module.exports = function(eleventyConfig) {
  // because we want to passthrough dist folder
  eleventyConfig.setUseGitIgnore(false);
  
  // passthrough all files in dist/fluo to dist directory of site output
  eleventyConfig.addPassthroughCopy({ "dist/fluo": "dist" });

  // passthrough assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // use markdown-it
  const markdownIt = require("markdown-it");

  // https://github.com/markdown-it/markdown-it#syntax-highlighting
  const hljs = require("highlight.js");
  const options = {
    highlight: (str,lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' +
                 hljs.highlight(lang, str, true).value +
                 '</code></pre>';
        } catch (__) {}
      }
    return '<pre class="hljs"><code>' + markdownLib.utils.escapeHtml(str) + '</code></pre>';
    },
    html: true,
    linkify: true,
    breaks: true
  }
  const markdownLib = markdownIt(options);
  
  eleventyConfig.setLibrary("md", markdownLib);

  return {
      dir: {
          input: "src", 
          output: "www",
      },
      passthroughFileCopy: true
  }
}
