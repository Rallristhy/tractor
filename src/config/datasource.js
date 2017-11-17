'use strict';

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const path = require("path");
const fs = require("fs");

/* let - Variável visível apenas nesse escopo */
let database = null;

/* 
 * Carrega as models, dinamicamento para não importar uma a uma 
 * __dirname = diretório atual
 */
const loadmodels = function(sequelize){

  const dir = path.join(__dirname, "../models");

  let models = [];

  /* Faz a leitura do diretório models */
  fs.readdirSync(dir).forEach(function(file){
    const modelDir = path.join(dir, file); // une o diretório das models e o arquivo
    const model = sequelize.import(modelDir); // importa todas as models do diretório aqui
    models[model.name] = model;
  });

  return models;

};

module.exports = function(app) {
  

  /* 
   * Verifica se já existe, se não existir conexão com o banco, cria
   * Singleton garante a instancia do banco de dados apenas uma vez
   */
  if(!database){

    const sequelize = new Sequelize("tractor", "postgres", "rmtmsmt@", {
      operatorsAliases: { $and: Op.and },
      host: "localhost",
      port: 5432, // 54300
        dialect: "postgres",

        pool: {
          max: 5,
          min: 0,
          idle: 10000 /* Ocioso, a conexão é fechada após 10000 ms */
        }
    });

    database = {
      sequelize,
      Sequelize,
      models: {}
    };

    /* Carregar models */
    database.models = loadmodels(sequelize);

    /* Garante que cada vez que a app for iniciada será sincronizada com o banco */
    sequelize.sync().done(function(){
      return database;
    });

  };

  /* Se já estiver iniciado retorna a database */
  return database;

};