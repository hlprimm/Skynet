var Database = require('./lib/database.js');
var Repository = require('./repository/repository.js');
var Service = require('./service/service.js');
var Bot = require('./bot/bot.js');

var config = require('configurizer').getVariables();
var database = new Database(config);
var repository = new Repository(database);
var service = new Service(repository);
var bot = new Bot(config, service);
