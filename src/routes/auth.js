const HttpStatus = require("http-status");
const jwt = require("jwt-simple");

const bcrypt = require("bcrypt");

module.exports = function(app) {

	const jwtSecret = "R411risthy";
	const usuario = app.datasource.models.usuario;

	/* Rota de autenticação */
	app.post('/token', function (request, response) {

	  	if(request.body.email && request.body.senha){

	  		const email = request.body.email;
	  		const senha = request.body.senha;

	  		usuario.findOne({where: { email }})
	  			.then(usu => {

	  				if(usuario.verificaSenha(usu.senha, senha)) {
	  					
	  					const payload = { id: usu.id };

	  					response.json({
	  						token: jwt.encode(payload, jwtSecret)
	  					});
	  				}
	  				else {
	  					response.sendStatus(HttpStatus.UNAUTHORIZED);
	  				}
	  			})
	  			.catch( () => response.sendStatus(HttpStatus.UNAUTHORIZED));

	  	}
	  	else {
	  		response.sendStatus(HttpStatus.UNAUTHORIZED);
	  	}
	});

};