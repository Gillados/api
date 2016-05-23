'use strict';

module.exports = {
	port: 8080,
	saltRounds: 10,
	environment: 'development', // development, production
	secret: 'SuperSecretWaiterIOStuff',
	expireDays: 7,
	database: 'waiter.db' // file name or :memory:
};
