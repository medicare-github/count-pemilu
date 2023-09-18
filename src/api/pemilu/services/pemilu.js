'use strict';

/**
 * pemilu service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pemilu.pemilu');
