module.exports = function(eleventyConfig) {

    eleventyConfig.setDataDeepMerge(true);
    
    // config objects
    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes",
            data: "_data"
        },
        templateFormats: [
            "md",
            "html",
            "njk"
        ],
        passthroughFileCopy: true
    };
};