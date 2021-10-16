const { createInlineCss } = require('./eleventy-google-fonts');

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("eleventyGoogleFonts", async value => {
    return await createInlineCss(value)
  });
}
