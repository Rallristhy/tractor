'use strict';

module.exports = function(app) {

	const cidadeController = new app.Controller(app.datasource.models.cidades);	

	app.get('/cidades', function (request, response) {

		cidadeController.getAll()
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

	app.post('/cidades', function (request, response) {

		cidadeController.create(request.body)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

	app.get('/cidades/:id_cidade', function (request, response) {

		cidadeController.getById(request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

	app.put('/cidades/:id_cidade', function (request, response) {

		cidadeController.update(request.body, request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});


	});

	app.delete('/cidades/:id_cidade', function (request, response) {

		cidadeController.delete(request.params)
			.then(function(result){
				response.sendStatus(result.statusCode);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

};	