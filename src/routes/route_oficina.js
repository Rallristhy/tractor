'use strict';

const OficinaController = require("../controllers/ctr_oficina");

module.exports = function(app) {

	const oficinaController = new OficinaController(app.datasource.models.oficina);	

	app.get('/oficina', function (request, response) {

		oficinaController.getAll()
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
		});

	});

	app.post('/oficina', function (request, response) {

		oficinaController.create(request.body)
				.then(function(result){
					response.status(result.statusCode);
					response.json(result.data);
				})
				.catch(function(err){
					errorResponse(error.message, result.statusCode);
		});

	});

	app.get('/oficina/:id_oficina', function (request, response) {

		oficinaController.getById(request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(err){
				errorResponse(error.message, 402);
		});

	});

	app.put('/oficina/:id_oficina', function (request, response) {

		oficinaController.update(request.body, request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(err){
				errorResponse(error.message, 422);
		});


	});

	app.delete('/oficina/:id_oficina', function (request, response) {

		oficinaController.delete(request.params)
			.then(function(result){
				response.sendStatus(result.statusCode);
			});

	});

};	