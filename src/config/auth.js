/* 
 * Estratégia json web token, extração de token vindas por request 
 */
const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");

module.exports = function(app) {

	/* Import de usuário */
	const Usuario = app.datasource.models.usuario;

	/* Options */
	const opts = {};

	/* 
	 * Garante que a encriptação será única para essa aplicação 
	 * Concatena esse secret e gera uma senha única
	 */
	jwtSecret = "R411risthy";
	jwtSession = { session:false };

	/* Secret do passport recebe secret criado */
	opts.secretOrKey = jwtSecret;

	/* Extrai o token que o usuário envia */
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

	/* 
	 * Definir estratégia de autenticação
	 * recebe o payload com id do usuário
	 */
	const strategy = new Strategy(opts, (payload, done) => {

		Usuario.findById(payload.id)
			.then(usu => {

				/* Se achar o usuário retorna o id e e-mail */
				if(usu) {
					console.log("Olá");
					return done(null, {
						id: usu.id,
						email: usu.email
					});
				}
				
				return done(null, false);

			})
			//.catch(error => done(error, null));

	});

	passport.use(strategy);

	return {

		/* Inicializa o passport */
		initialize: () => passport.initialize(),
		/* Autentica os usuários */
		authenticate: () => passport.authenticate("jwt", jwtSession)
	};
};
