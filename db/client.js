const { Client } = require("pg");
const client = new Client("postgres://localhost:5432/school_list");

module.exports = client;
