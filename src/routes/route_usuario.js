'use strict';

module.exports = function(app) {

	const usuarioController = new app.Controller(app.datasource.models.usuario);	

	app.get('/usuario', function (request, response) {

		usuarioController.getAll()
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
		});

	});

	app.post('/usuario', function (request, response) {

		usuarioController.create(request.body)
				.then(function(result){
					response.status(result.statusCode);
					response.json(result.data);
				})
				.catch(function(err){
					errorResponse(error.message, result.statusCode);
		});

	});

	app.get('/usuario/:id_usuario', function (request, response) {

		usuarioController.getById(request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(err){
				errorResponse(error.message, 402);
		});

	});

	app.put('/usuario/:id_usuario', function (request, response) {

		usuarioController.update(request.body, request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(err){
				errorResponse(error.message, 422);
		});


	});

	app.delete('/usuario/:id_usuario', function (request, response) {

		usuarioController.delete(request.params)
			.then(function(result){
				response.sendStatus(result.statusCode);
			});

	});

};	