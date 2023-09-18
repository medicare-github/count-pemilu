'use strict';

/**
 * tps service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tps.tps');
