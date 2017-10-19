const HttpStatus = require("http-status");

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);

class UsuarioController {

	/* Construtor */
	constructor(Usuario){
		this.Usuario = Usuario;
	}

	getAll(){

		return this.Usuario.findAll({})
			.then(function(result){ 
				return defaultResponse(result, HttpStatus.OK);
			})
			.catch(function(error){
				return errorResponse(error.message, HttpStatus.BAD_REQUEST);
			})
	}

	getById(data){

		return this.Usuario.findOne({where: data})
			.then(function(result){
				return defaultResponse(result, HttpStatus.OK);
			})
			.catch(function(err){
				return errorResponse(error.message);
		});
	}

	create(data){

		/* 
		 * INSERT INTO usuario 
		 * request.body vinda da view
		 */
		return this.Usuario.create(data)
			.then(function(result){
				return defaultResponse(result, HttpStatus.CREATED);
			})
			.catch(function(err){
				return errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
		});
	}

	update(data, params){

		/* 
		 * UPDATE usuario 
		 * request.body id vindo da view
		 * { where: request.params } vindas da view
		 */
		return this.Usuario.update(data, {where: params})
			.then(function(result){
				return defaultResponse(result);
			})
			.catch(function(err){
				return errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
		});
	}

	delete(data){

		return this.Usuario.destroy({where: data})
			.then(function(result){
				return defaultResponse(result, HttpStatus.NO_CONTENT);
			})
			.catch(function(err){
				return errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
		});
	}

}

module.exports = UsuarioController;