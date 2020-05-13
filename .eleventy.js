module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/css");
    
    // config objects
    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes"
        }
    };
};