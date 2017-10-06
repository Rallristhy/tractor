/* 
 * Boa prática de programação
 * Não permite "Gambiarras"
 */
'use strict';

/* Importando express e instanciando o express */
const express = require("express");
const app = express();

/* Import datasource */
const datasource = require("./datasource");

/* Envia a APP como parâmetro para o datasource */
app.datasource = datasource(app);

/* 
 * Importando bodyParser, middleware que faz o parser da body vinda da view
 * Middleware para qualquer URL
 * server.use - Toda requisição vindas para o backend passará pelo urlencoded
 * urlencoded é o formato dos dados vindos do frondend
 * Se o body vindas do front end for um json, passará por esse middleware para fazer a interpretação
 */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Criando um server http para utilização do socketIO */
const http = require('http').Server(app);
const io = require('socket.io')(http);

/* Importando sockets  */
const socket = require("../socket/socket")(io);

/* Importando rotas e enviando para rotas app como parâmetro */
const routes = require("../routes/routes")(app);

/* Logs - puxa informações por POST HTML */
const logger = require("morgan");
app.use(logger("dev"));

/* Se não existir porta cria e atribui com valor padrão 3006 */
const port = 3006;

/* Iniciando server */
http.listen(port, function () {
	console.log("Servidor rodando em %s", port);
});

module.exports = app;