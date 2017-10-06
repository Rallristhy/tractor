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

	app.get('/usuario', function (request, response) {

		Usuario.findAll({}) /* SELECT * FROM usuario */
			.then(function(result){ /* Promisque, pega o resultado da consulta e envia como json */
				response.json(result); /* Se ocorrer erro envia o status 412 */
			})
			.catch(function(err){
				response.status(412);
		});

	});

	app.get('/usuario/:id', function (request, response) {

		/* 
		 * SELECT * FROM usuario WHERE id
		 * request.params = id vindo da view
		 */
		Usuario.findOne({where: request.params}) /* SELECT * FROM usuario WHERE id  */
			.then(function(result){ /* Promise, pega o resultado da consulta e envia como json */
				response.json(result); /* Se ocorrer erro envia o status 412 */
			})
			.catch(function(err){
				response.status(412);
		});

	});

	app.post('/usuario', function (request, response) {

		/* 
		 * INSERT INTO usuario 
		 * request.body vinda da view
		 */
		Usuario.create(request.body)
			.then(function(result){
				response.json(result); /* Se ocorrer erro envia o status 412 */
			})
			.catch(function(err){
				response.status(412);
		});

	});

	app.put('/usuario/:id', function (request, response) {

		/* 
		 * UPDATE usuario 
		 * request.body id vindo da view
		 * { where: request.params } vindas da view
		 */
		Usuario.update(request.body, {where: request.params})
			.then(function(result){
				response.json(result); /* Se ocorrer erro envia o status 412 */
			})
			.catch(function(err){
				response.status(412);
		});

	});

	app.delete('/usuario/:id', function (request, response) {

		/* 
		 * INSERT INTO usuario 
		 * request.body id vindo da view
		 * { where: request.params } vindas da view
		 */
		Usuario.destroy({where: request.params})
			.then(function(result){
				response.sendStatus(204); /* Se ocorrer erro envia o status 412 */
			})
			.catch(function(err){
				response.status(412);
		});

	});

};