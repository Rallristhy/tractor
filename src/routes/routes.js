'use strict';

module.exports = function(app) {

	/* Rota padrão */
	app.get('/', function (request, response) {
		response.sendFile('/tractor/public/views/index.html');
		//response.send('Teste root');
	});

	/* Rota teste */
	app.get('/teste', function (request, response) {
	  	response.send('Teste');
	});

};