const pluginRSS = require('@11ty/eleventy-plugin-rss');
const moment = require('moment');
moment.locale('en');

module.exports = function(eleventyConfig) {
    // allows templates to add additional data
    eleventyConfig.setDataDeepMerge(true);

    // copy static files directly, with same directory structure
    eleventyConfig.addPassthroughCopy("src/assets");

    // parse excerpts on posts
    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_separator: "<!-- excerpt -->",
        excerpt_alias: "post_excerpt"
    });

    // filter to return a date as ISO string objects
    eleventyConfig.addFilter('dateISO', date => {
        return moment(date).toISOString();
    });

    // filter to return a date for prettier display. Uses UTC to avoid timezone differences
    eleventyConfig.addFilter('datePretty', date => {
        return moment(date).utc().format('LL'); // e.g. May 16, 2020
    });

    // filter to sort a list of posts by date desc
    // https://stackoverflow.com/q/10123953
    eleventyConfig.addFilter('sortDesc', posts => {
        posts.sort(function(a,b){
            a = new Date(a.date);
            b = new Date(b.date);
            return a > b ? -1 : a < b ? 1 : 0;
        });
        return posts;
    });

    // add collection of all tags
    eleventyConfig.addCollection("tagList", require("./js/tag-list.js"));

    // create custom collection of posts
    eleventyConfig.addCollection("posts", collection => {
        return collection.getFilteredByGlob('./src/posts/*.md');
    });

    // add plugins
    eleventyConfig.addPlugin(pluginRSS);
    
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
        markdownTemplateEngine: "njk"
    };
};