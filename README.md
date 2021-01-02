# eleventy-google-fonts

A Nunjucks shortcode to optimize Google Fonts. This shortcode download and inline Google Font's CSS.

## Installation

```
npm install eleventy-google-fonts --save-dev
```

### Add to eleventy config file

```
const eleventyGoogleFonts = require("eleventy-google-fonts");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyGoogleFonts);
};
```

### Use shortcode

```
<head>
  ...
  {% eleventyGoogleFonts 'https://fonts.googleapis.com/css2?family=Overpass:wght@600&display=swap' %}
  ...
</head>
```

## License
This code is available under the [MIT license](https://github.com/takanorip/eleventy-google-fonts/blob/master/LICENCE).
