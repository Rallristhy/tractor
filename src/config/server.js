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
 * Import controller genérica e cria uma variável para ser utilizada pelos módulos
 */
app.Controller = require("../controllers/controller");

/* 
 * Import Rotas
 */
const routes = require("../routes/routes");
const cidadeRouter = require("../routes/route_cidades");
const estadoRouter = require("../routes/route_estados");
const oficinaRouter = require("../routes/route_oficina");
const usuarioRouter = require("../routes/route_usuario");
const mecanicoRouter = require("../routes/route_mecanico");
const clienteRouter = require("../routes/route_cliente");
const fabricanteRouter = require("../routes/route_fabricante");
const veiculoRouter = require("../routes/route_veiculo");
const servicoRouter = require("../routes/route_servicos");
const ordemServicoRouter = require("../routes/route_os");
const ServicosOrdemServicoRouter = require("../routes/route_servicos_os");
routes(app);

/* 
* Importando sockets
*/
const socket = require("../sockets/sockets")(io);

/* 
 * Importando datasource
 */
const datasource = require("./datasource");
app.datasource = datasource(app);

/* 
 * Envia app como parâmetros para os outros módulos 
 */
routes(app);
cidadeRouter(app);
estadoRouter(app);
oficinaRouter(app);
usuarioRouter(app);
mecanicoRouter(app);
clienteRouter(app);
fabricanteRouter(app);
veiculoRouter(app);
servicoRouter(app);
ordemServicoRouter(app);
ServicosOrdemServicoRouter(app);

/* Iniciando server */
http.listen(port, function () {
	console.log("\n Servidor rodando em %s \n", port);
});

module.exports = app;