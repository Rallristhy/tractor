'use strict';

module.exports = function(app) {

	const mecanicoController = new app.Controller(app.datasource.models.mecanico);	

	app.get('/mecanico', function (request, response) {

		mecanicoController.getAll()
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
		});

	});

	app.post('/mecanico', function (request, response) {

		mecanicoController.create(request.body)
				.then(function(result){
					response.status(result.statusCode);
					response.json(result.data);
				})
				.catch(function(err){
					errorResponse(error.message, result.statusCode);
		});

	});

	app.get('/mecanico/:id_mecanico', function (request, response) {

		mecanicoController.getById(request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(err){
				errorResponse(error.message, 402);
		});

	});

	app.put('/mecanico/:id_mecanico', function (request, response) {

		mecanicoController.update(request.body, request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(err){
				errorResponse(error.message, 422);
		});


	});

	app.delete('/mecanico/:id_mecanico', function (request, response) {

		mecanicoController.delete(request.params)
			.then(function(result){
				response.sendStatus(result.statusCode);
			});

	});

};	