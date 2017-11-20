'use strict';

const HttpStatus = require("http-status");

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);

class OficinaController {

	constructor(Oficina){
		this.Oficina = Oficina;
	}

	getAll(){

		return this.Oficina.findAll({})
			.then(function(result){ 
				return defaultResponse(result, HttpStatus.OK);
			})
			.catch(function(error){
				return errorResponse(error.message, HttpStatus.BAD_REQUEST);
			})
	}

	getById(data){

		return this.Oficina.findOne({where: data})
			.then(function(result){
				return defaultResponse(result, HttpStatus.OK);
			})
			.catch(function(error){
				return errorResponse(error.message);
		});
	}

	create(data){

		/* 
		 * INSERT INTO Oficina 
		 * request.body vinda da view
		 */
		return this.Oficina.create(data)
			.then(function(result){
				return defaultResponse(result, HttpStatus.CREATED);
			})
			.catch(function(error){
				return errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
		});
	}

	update(data, params){

		/* 
		 * UPDATE Oficina 
		 * request.body id vindo da view
		 * { where: request.params } vindas da view
		 */
		return this.Oficina.update(data, {where: params})
			.then(function(result){
				return defaultResponse(result);
	 		})
			.catch(function(error){
				returnerrorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
		});
	}

	delete(data){

		return this.Oficina.destroy({where: data})
			.then(function(result){
				return defaultResponse(result, HttpStatus.NO_CONTENT);
			})
			.catch(function(error){
				return errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
		});
	}

}

module.exports = OficinaController;