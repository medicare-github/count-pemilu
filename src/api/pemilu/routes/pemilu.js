'use strict';

/**
 * pemilu router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::pemilu.pemilu');
