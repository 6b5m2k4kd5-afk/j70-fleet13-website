import { readFileSync } from 'fs';
import yaml from 'js-yaml';
import Image from '@11ty/eleventy-img';

export default function(eleventyConfig) {

  // Watch CSS and config files for changes
  eleventyConfig.addWatchTarget('./src/**/*.css');
  eleventyConfig.addWatchTarget('./fleets/**/config.yml');

  // Copy static assets
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./fleets/**/images');
  eleventyConfig.addPassthroughCopy('./fleets/**/logo.*');
  eleventyConfig.addPassthroughCopy('./.htaccess');

  // Global data - load fleet configs
  eleventyConfig.addGlobalData('fleets', function() {
    const fs = require('fs');
    const path = require('path');
    const yaml = require('js-yaml');

    const fleetsDir = 'fleets';
    const fleets = {};

    if (fs.existsSync(fleetsDir)) {
      const fleetDirs = fs.readdirSync(fleetsDir);

      fleetDirs.forEach(fleetDir => {
        const configPath = path.join(fleetsDir, fleetDir, 'config.yml');
        if (fs.existsSync(configPath)) {
          const config = yaml.load(fs.readFileSync(configPath, 'utf8'));
          fleets[fleetDir] = config;
          fleets[fleetDir].slug = fleetDir;
        }
      });
    }

    return fleets;
  });

  // Image optimization filter
  eleventyConfig.addNunjucksAsyncFilter('image', async function(src, alt) {
    try {
      if (!src) return '';

      let metadata = await Image(src, {
        widths: [300, 600, 1200],
        formats: ['webp', 'jpeg'],
        outputDir: './_site/img/'
      });

      let imageAttributes = {
        alt: alt || '',
        sizes: '(min-width: 1024px) 1024px, 100vw',
        loading: 'lazy',
        decoding: 'async'
      };

      return Image.generateHTML(metadata, imageAttributes);
    } catch(e) {
      console.warn(`Image optimization failed for ${src}:`, e.message);
      return `<img src="${src}" alt="${alt || ''}" />`;
    }
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

  // Get fleet config by slug
  eleventyConfig.addFilter('getFleetConfig', function(fleetSlug) {
    const fleets = this.ctx.globals.fleets;
    return fleets[fleetSlug] || {};
  });

  // Get all fleet slugs
  eleventyConfig.addFilter('getAllFleetSlugs', function() {
    const fleets = this.ctx.globals.fleets;
    return Object.keys(fleets);
  });

  // Markdown library with plugins
  let markdownIt = require('markdown-it');
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
    templateFormats: ['md', 'njk', 'html', 'yml'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  };
}
