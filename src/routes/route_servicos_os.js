'use strict';

module.exports = function(app) {

	const ServicosOsController = new app.Controller(app.datasource.models.servicos_os);	

	app.get('/servicos_os', function (request, response) {

		ServicosOsController.getAll()
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

	app.post('/servicos_os', function (request, response) {

		ServicosOsController.create(request.body)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

	app.get('/servicos_os/:id_servico_os', function (request, response) {

		ServicosOsController.getById(request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

	app.put('/servicos_os/:id_servico_os', function (request, response) {

		ServicosOsController.update(request.body, request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});


	});

	app.delete('/servicos_os/:id_servico_os', function (request, response) {

		ServicosOsController.delete(request.params)
			.then(function(result){
				response.sendStatus(result.statusCode);
			});

	});

};	