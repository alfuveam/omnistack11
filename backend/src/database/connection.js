const knex = require('knex');
const configuration = require('../../knexfile');

const connectionType = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;

const connection = knex(connectionType);

module.exports = connection;