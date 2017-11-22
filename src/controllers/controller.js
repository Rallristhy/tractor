'use strict';

/*
 * Funções para tratar o status e erros
 */
const HttpStatus = require("http-status");

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);

/*
 * Classe genérica Controller
 */
class Controller {

	constructor(T){
		this.T = T;
	}

	/*
	 * SELECT * FROM table
	 */
	getAll(){

		return this.T.findAll({})
			.then(function(result){ 
				return defaultResponse(result, HttpStatus.OK);
			})
			.catch(function(error){
				return errorResponse(error.message, HttpStatus.BAD_REQUEST);
			})
	}

	/*
	 * SELECT * FROM table WHERE id = ?
	 */
	getById(data){

		return this.T.findOne({where: data})
			.then(function(result){
				return defaultResponse(result, HttpStatus.OK);
			})
			.catch(function(error){
				return errorResponse(error.message);
		});
	}

	/*
	 * INSERT INTO table
	 * request.body vinda da view
	 */
	create(data){

		return this.T.create(data)
			.then(function(result){
				return defaultResponse(result, HttpStatus.CREATED);
			})
			.catch(function(error){
				return errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
		});
	}

	/*
	 * UPDATE table
	 * request.body e where: request.params vinda da view
	 */
	update(data, params){

		return this.T.update(data, {where: params})
			.then(function(result){
				return defaultResponse(result);
	 		})
			.catch(function(error){
				returnerrorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
		});
	}

	/*
	 * DELETE FROM table WHERE id = ?
	 */
	delete(data){

		return this.T.destroy({where: data})
			.then(function(result){
				return defaultResponse(result, HttpStatus.NO_CONTENT);
			})
			.catch(function(error){
				return errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
		});
	}

}

module.exports = Controller;