'use strict';

/* Rotas */
module.exports = function(app) {

	const Usuario = app.datasource.models.usuario;

	/* Rota padrão */
	app.get('/', function (request, response) {
		response.sendFile('/tractor/public/views/index.html');
	});

	/* Rota teste */
	app.get('/teste', function (request, response) {
	  	response.send('Teste');
	});

};

//https://www.youtube.com/watch?v=a1RXdtbIkKE&index=7&list=PLz_YTBuxtxt74aOA2W8ArqZpsPlxP-JC9