module.exports = function(eleventyConfig) {
  // Copy static assets as-is (no processing)
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/icons");
  eleventyConfig.addPassthroughCopy("src/media");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/*.png");  // logos
  eleventyConfig.addPassthroughCopy("src/manifest.json");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/*.xlsm");

  // sorted projects
  eleventyConfig.addCollection("projectsSorted", function(collectionApi) {
    return collectionApi.getFilteredByTag("project").sort((a, b) => {
    // Sort by the order field
    let orderA = a.data.order;
    let orderB = b.data.order;
    return orderB - orderA;
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
