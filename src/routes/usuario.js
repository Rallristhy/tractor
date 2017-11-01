const UsuarioController = require("../controllers/usuario");

module.exports = function(app) {

	/* Instanciando um usuário */
	const usuarioController = new UsuarioController(app.datasource.models.usuario);	

	app.route('/usuario')
		/* Todas as rotas teram que autenticar */
		.all(app.auth.authenticate())
		.get(function (request, response) {
		usuarioController.getAll()
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			});
			
		})
		.post(function (request, response) {

			usuarioController.create(request.body)
				.then(function(result){
					response.status(result.statusCode);
					response.json(result.data);
				})
				.catch(function(err){
					errorResponse(error.message, 422);
			});

		});

	app.get('/usuario/:id', function (request, response) {

		usuarioController.getById(request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(err){
				errorResponse(error.message, 422);
		});

	});

	/*app.post('/usuario', function (request, response) {

		usuarioController.create(request.body)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(err){
				errorResponse(error.message, 422);
		});

	});*/

	app.put('/usuario/:id', function (request, response) {

		usuarioController.update(request.body, request.params)
			.then(function(result){
				response.status(result.statusCode);
				response.json(result.data);
			})
			.catch(function(err){
				errorResponse(error.message, 422);
		});


	});

	app.delete('/usuario/:id', function (request, response) {

		usuarioController.delete(request.params)
			.then(function(result){
				response.sendStatus(result.statusCode);
			});

	});

};
