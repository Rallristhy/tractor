'use strict';

/* Sockets */
module.exports = function(io) {

	/* Socket padrão de conexão */
	io.on('connection', function(socket){

		/* Informa ao servidor o IP que conectou na aplicação */
		console.log(socket.handshake.address.substring(7, 20)+" ID: "+socket.id+" entrou...");

		socket.on('disconnect', function(){
       		/* Informa ao servidor o IP que desconectou na aplicação */	
        	console.log(socket.handshake.address.substring(7, 20)+" ID: "+socket.id+' saiu...');
    	});

	});
};