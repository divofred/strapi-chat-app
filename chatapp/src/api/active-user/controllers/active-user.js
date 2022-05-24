'use strict';

/**
 *  active-user controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::active-user.active-user');
