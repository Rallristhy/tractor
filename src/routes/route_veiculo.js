'use strict';

module.exports = function(app) {

	const veiculoController = new app.Controller(app.datasource.models.veiculo);	

	app.get('/veiculo', function (request, response) {

		veiculoController.getAll()
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

	app.post('/veiculo', function (request, response) {

		veiculoController.create(request.body)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

	app.get('/veiculo/:id_veiculo', function (request, response) {

		veiculoController.getById(request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

	app.put('/veiculo/:id_veiculo', function (request, response) {

		veiculoController.update(request.body, request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});


	});

	app.delete('/veiculo/:id_veiculo', function (request, response) {

		veiculoController.delete(request.params)
			.then(function(result){
				response.sendStatus(result.statusCode);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

};