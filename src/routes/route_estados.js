'use strict';

const EstadoController = require("../controllers/ctr_estados");

module.exports = function(app) {

	const estadoController = new EstadoController(app.datasource.models.estados);	

	app.get('/estados', function (request, response) {

		estadoController.getAll()
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
		});

	});

	app.post('/estados', function (request, response) {

		estadoController.create(request.body)
				.then(function(result){
					response.status(result.statusCode);
					response.json(result.data);
				})
				.catch(function(err){
					errorResponse(error.message, result.statusCode);
		});

	});

	app.get('/estados/:id_estado', function (request, response) {

		estadoController.getById(request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(err){
				errorResponse(error.message, 402);
		});

	});

	app.put('/estados/:id_estado', function (request, response) {

		estadoController.update(request.body, request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(err){
				errorResponse(error.message, 422);
		});


	});

	app.delete('/estados/:id_estado', function (request, response) {

		estadoController.delete(request.params)
			.then(function(result){
				response.sendStatus(result.statusCode);
			});

	});

};	