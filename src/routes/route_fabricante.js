'use strict';

module.exports = function(app) {

	const fabricanteController = new app.Controller(app.datasource.models.fabricante);	

	app.get('/fabricante', function (request, response) {

		fabricanteController.getAll()
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

	app.post('/fabricante', function (request, response) {

		fabricanteController.create(request.body)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

	app.get('/fabricante/:id_fabricante', function (request, response) {

		fabricanteController.getById(request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

	app.put('/fabricante/:id_fabricante', function (request, response) {

		fabricanteController.update(request.body, request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});


	});

	app.delete('/fabricante/:id_fabricante', function (request, response) {

		fabricanteController.delete(request.params)
			.then(function(result){
				response.sendStatus(result.statusCode);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

};