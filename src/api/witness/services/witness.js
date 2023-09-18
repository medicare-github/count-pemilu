'use strict';

/**
 * witness service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::witness.witness');
