'use strict';

module.exports = function(app) {

	const servicoController = new app.Controller(app.datasource.models.servicos);	

	app.get('/servicos', function (request, response) {

		servicoController.getAll()
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
		});

	});

	app.post('/servicos', function (request, response) {

		servicoController.create(request.body)
				.then(function(result){
					response.status(result.statusCode);
					response.json(result.data);
				})
				.catch(function(err){
					errorResponse(error.message, result.statusCode);
		});

	});

	app.get('/servicos/:id_servico', function (request, response) {

		servicoController.getById(request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(err){
				errorResponse(error.message, result.statusCode);
		});

	});

	app.put('/servicos/:id_servico', function (request, response) {

		servicoController.update(request.body, request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(err){
				errorResponse(error.message, result.statusCode);
		});


	});

	app.delete('/servicos/:id_servico', function (request, response) {

		servicoController.delete(request.params)
			.then(function(result){
				response.sendStatus(result.statusCode);
			});

	});

};