/* 
 * Boa prática de programação
 * Não permite "Gambiarras"
 */
'use strict';

/* 
 * Importando e instanciando o express 
 */
const express = require("express");
const app = express();

/* 
 * Criando um server http para utilização do socketIO
 * Importando SocketIO 
 */
const http = require('http').Server(app);
const io = require('socket.io')(http);

/* 
 * Logs - puxa informações por POST HTML 
 */
const logger = require("morgan");
app.use(logger("dev"));

/* Porta que rodará a APP */
const port = 3006;

/* 
 * Importando bodyParser, middleware que faz o parser da body vinda da view
 * Middleware para qualquer URL
 * server.use - Toda requisição vindas para o backend passará pelo urlencoded
 * urlencoded é o formato dos dados vindos do frondend
 * Se o body vindas do front end for um json, passará por esse middleware para fazer a interpretação
 */
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* 
 * Importando sockets criados
 */
const socket = require("../socket/socket")(io);

/* 
 * Import datasource
 * Envia a APP como parâmetro para o datasource
 */
const datasource = require("./datasource");
app.datasource = datasource(app);


/* 
 * Importando rotas e enviando para rotas app como parâmetro 
 * routes(app); OU const routes = require("../routes/routes")(app);
 */
const routes = require("../routes/routes");
const usuarioRouter = require("../routes/usuario");
const authRouter = require("../routes/auth");

/* Importanto auth.js */
const authorization = require("./auth");

/* 
 * Inicializa a autorization, ou seja, envia app como parâmetro para o authorizarion
 * App usar o middleware de autenticação criado
 * Cria uma variável auth em app para poder ser utilizado por outros módulos
 */
const auth = authorization(app);
app.use(auth.initialize());
app.auth = auth;

/* Envia app como parâmetros para os outros módulos */
routes(app);
usuarioRouter(app);
authRouter(app);

/* Iniciando server */
http.listen(port, function () {
	console.log("\n Servidor rodando em %s \n", port);
});

module.exports = app;