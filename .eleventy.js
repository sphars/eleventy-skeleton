module.exports = function(eleventyConfig) {

    eleventyConfig.setDataDeepMerge(true);

    //copy static files directly, with same directory structure
    eleventyConfig.addPassthroughCopy("src/assets");
    
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
        ]
    };
};