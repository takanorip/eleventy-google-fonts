const { createInlineCss } = require('./eleventy-google-fonts');

module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksAsyncShortcode("eleventyGoogleFonts", async value => {
    return await createInlineCss(value)
  });
}