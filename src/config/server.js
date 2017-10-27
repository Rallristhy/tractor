/* 
 * Boa prática de programação
 * Não permite "Gambiarras"
 */
'use strict';

/* Importando express e instanciando o express */
const express = require("express");
const app = express();

/* Importanto auth.js */
const authorization = require("./auth");
const authRouter = require("../routes/auth");

/* Import datasource */
const datasource = require("./datasource");

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

/* Envia a APP como parâmetro para o datasource */
app.datasource = datasource(app);

/* Importando rotas e enviando para rotas app como parâmetro */
const routes = require("../routes/routes");
routes(app); //OR const routes = require("../routes/routes")(app);

//const Usuario = app.datasource.models.Usuario;
const usuarioRouter = require("../routes/usuario");
usuarioRouter(app);

/* Inicializa a autorization, ou seja, envia app como parâmetro para o authorizarion */
const auth = authorization(app);

/* App usar o middleware de autenticação criado */
app.use(auth.initialize());

/* Para o auth poder ser usado em outros locais */
app.auth = auth;

authRouter(app);

/* Criando um server http para utilização do socketIO */
const http = require('http').Server(app);
const io = require('socket.io')(http);

/* Importando sockets  */
const socket = require("../socket/socket")(io);

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