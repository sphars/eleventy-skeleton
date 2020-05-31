const moment = require('moment');
moment.locale('en');

module.exports = function(eleventyConfig) {
    // allows templates to add additional data
    eleventyConfig.setDataDeepMerge(true);

    // copy static files directly, with same directory structure
    eleventyConfig.addPassthroughCopy("src/assets");

    // config objects
    eleventyConfig.addFilter('dateISO', date => {
        return moment(date).toISOString();
    });

    eleventyConfig.addFilter('datePretty', date => {
        return moment(date).format('LL'); // e.g. May 16, 2020
    });

    // add collection of tags
    eleventyConfig.addCollection("tagList", require("./js/tag-list.js"));

    // create custom collection of posts
    eleventyConfig.addCollection("posts", collection => {
        return collection.getFilteredByGlob('./src/posts/*.md');
    });
    
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