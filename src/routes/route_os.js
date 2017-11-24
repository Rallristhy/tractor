'use strict';

module.exports = function(app) {

	const osController = new app.Controller(app.datasource.models.os);	

	app.get('/os', function (request, response) {

		osController.getAll()
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

	app.post('/os', function (request, response) {

		osController.create(request.body)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

	app.get('/os/:id_os', function (request, response) {

		osController.getById(request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});

	});

	app.put('/os/:id_os', function (request, response) {

		osController.update(request.body, request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(error){
				errorResponse(error.message, result.statusCode);
			});


	});

	app.delete('/os/:id_os', function (request, response) {

		osController.delete(request.params)
			.then(function(result){
				response.sendStatus(result.statusCode);
			});

	});

};	