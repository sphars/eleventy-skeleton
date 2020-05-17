const moment = require('moment');
moment.locale('en');

module.exports = function(eleventyConfig) {
    // allows templates to add additional data
    eleventyConfig.setDataDeepMerge(true);

    //copy static files directly, with same directory structure
    eleventyConfig.addPassthroughCopy("src/assets");

    // config objects
    eleventyConfig.addFilter('dateISO', date => {
        return moment(date).toISOString();
    });

    eleventyConfig.addFilter('datePretty', date => {
        return moment(date).format('LL'); // e.g. May 16, 2020
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