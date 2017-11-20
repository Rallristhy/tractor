'use strict';

const HttpStatus = require("http-status");

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);

class EstadoController {

	constructor(Estado){
		this.Estado = Estado;
	}

	getAll(){

		return this.Estado.findAll({})
			.then(function(result){ 
				return defaultResponse(result, HttpStatus.OK);
			})
			.catch(function(error){
				return errorResponse(error.message, HttpStatus.BAD_REQUEST);
			})
	}

	getById(data){

		return this.Estado.findOne({where: data})
			.then(function(result){
				return defaultResponse(result, HttpStatus.OK);
			})
			.catch(function(error){
				return errorResponse(error.message);
		});
	}

	create(data){

		/* 
		 * INSERT INTO Estado 
		 * request.body vinda da view
		 */
		return this.Estado.create(data)
			.then(function(result){
				return defaultResponse(result, HttpStatus.CREATED);
			})
			.catch(function(error){
				return errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
		});
	}

	update(data, params){

		/* 
		 * UPDATE Estado 
		 * request.body id vindo da view
		 * { where: request.params } vindas da view
		 */
		return this.Estado.update(data, {where: params})
			.then(function(result){
				return defaultResponse(result);
	 		})
			.catch(function(error){
				returnerrorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
		});
	}

	delete(data){

		return this.Estado.destroy({where: data})
			.then(function(result){
				return defaultResponse(result, HttpStatus.NO_CONTENT);
			})
			.catch(function(error){
				return errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
		});
	}

}

module.exports = EstadoController;