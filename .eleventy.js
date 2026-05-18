const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const markdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {

  // Watch CSS and config files for changes
  eleventyConfig.addWatchTarget('./src/**/*.css');
  eleventyConfig.addWatchTarget('./fleets/**/config.yml');

  // Copy static assets
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./fleets/**/images');
  eleventyConfig.addPassthroughCopy('./fleets/**/logo.*');

  // Global data - load fleet configs
  eleventyConfig.addGlobalData('fleets', function() {
    const fleetsDir = 'fleets';
    const fleets = {};

    if (fs.existsSync(fleetsDir)) {
      const fleetDirs = fs.readdirSync(fleetsDir);

      fleetDirs.forEach(fleetDir => {
        const configPath = path.join(fleetsDir, fleetDir, 'config.yml');
        if (fs.existsSync(configPath)) {
          try {
            const config = yaml.load(fs.readFileSync(configPath, 'utf8'));
            fleets[fleetDir] = config;
            fleets[fleetDir].slug = fleetDir;
          } catch(e) {
            console.warn(`Error loading config for ${fleetDir}:`, e.message);
          }
        }
      });
    }

    return fleets;
  });

  // Date formatting filter
  eleventyConfig.addFilter('dateFilter', (dateObj) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(dateObj));
  });

  // Date for sorting (YYYY-MM-DD)
  eleventyConfig.addFilter('dateSort', (dateObj) => {
    const date = new Date(dateObj);
    return date.toISOString().split('T')[0];
  });

  // Markdown library with plugins
  let md = new markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });

  eleventyConfig.setLibrary('md', md);

  // Config
  return {
    dir: {
      input: '.',
      output: '_site',
      includes: '_includes',
      layouts: '_includes/layouts'
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
};
