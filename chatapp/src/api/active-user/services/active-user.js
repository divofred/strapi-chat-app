'use strict';

/**
 * active-user service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::active-user.active-user');
