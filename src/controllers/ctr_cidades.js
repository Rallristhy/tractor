'use strict';

const HttpStatus = require("http-status");

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);

class CidadeController {

	constructor(Cidade){
		this.Cidade = Cidade;
	}

	getAll(){

		return this.Cidade.findAll({})
			.then(function(result){ 
				return defaultResponse(result, HttpStatus.OK);
			})
			.catch(function(error){
				return errorResponse(error.message, HttpStatus.BAD_REQUEST);
			})
	}

	getById(data){

		return this.Cidade.findOne({where: data})
			.then(function(result){
				return defaultResponse(result, HttpStatus.OK);
			})
			.catch(function(err){
				return errorResponse(error.message);
		});
	}

	create(data){

		/* 
		 * INSERT INTO Cidade 
		 * request.body vinda da view
		 */
		return this.Cidade.create(data)
			.then(function(result){
				return defaultResponse(result, HttpStatus.CREATED);
			})
			.catch(function(err){
				return errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
		});
	}

	update(data, params){

		/* 
		 * UPDATE Cidade 
		 * request.body id vindo da view
		 * { where: request.params } vindas da view
		 */
		return this.Cidade.update(data, {where: params})
			.then(function(result){
				return defaultResponse(result);
	 		})
			.catch(function(err){
				returnerrorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
		});
	}

	delete(data){

		return this.Cidade.destroy({where: data})
			.then(function(result){
				return defaultResponse(result, HttpStatus.NO_CONTENT);
			})
			.catch(function(err){
				return errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
		});
	}

}

module.exports = CidadeController;