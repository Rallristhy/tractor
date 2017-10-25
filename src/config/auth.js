/* 
 * Estratégia json web token, extração de token vindas por request 
 */
const passport = require("passport");
const { Strategy, ExtractJwt } = require "passport-jwt"

/* 
 * Garante que a encriptação será única para essa aplicação 
 * Concatena esse secret e gera uma senha única
 */
jwtSecret = "R411risthy";
jwtSession = { session:false };

module.exports = function(app) {

	/* Import de usuário */
	const Usuario = app.datasource.models.usuario;

	/* Options */
	const opts = {};

	/* Secret do passport recebe secret criado */
	opts.secretOrKey = jwtSecret;

	/* Extrai o token que o usuário envia */
	opts.jwtFromRequest = ExtractJwt.fromAuthHeader();

	/* 
	 * Definir estratégia de autenticação
	 */
	const strategy = new Strategy(opts, (payload, done) => {
		Usuario.findById(payload.id)
			.then(function(usu){ 

				if(usu) {
					return done(null, {
						id: usu.id,
						email: usu.email
					});
				}

				
			})

	});


}
