var environment = 'development';
var knexConfig = require('../../knexfile')[environment];

module.exports = require('knex')(knexConfig);