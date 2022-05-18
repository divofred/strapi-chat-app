'use strict';

/**
 * account service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::account.account');
