'use strict';

module.exports = function(app) {

	const clienteController = new app.Controller(app.datasource.models.cliente);	

	app.get('/cliente', function (request, response) {

		clienteController.getAll()
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

	app.post('/cliente', function (request, response) {

		clienteController.create(request.body)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

	app.get('/cliente/:id_cliente', function (request, response) {

		clienteController.getById(request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

	app.put('/cliente/:id_cliente', function (request, response) {

		clienteController.update(request.body, request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});


	});

	app.delete('/cliente/:id_cliente', function (request, response) {

		clienteController.delete(request.params)
			.then(function(result){
				response.sendStatus(result.statusCode);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

};	