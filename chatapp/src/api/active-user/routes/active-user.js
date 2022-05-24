'use strict';

/**
 * active-user router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::active-user.active-user');
