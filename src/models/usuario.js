const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataType) { //DataType é o Sequelize original

  const Usuario = sequelize.define("usuario", {
    id: { type: DataType.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataType.STRING(32), allowNull: false },
    sobrenome: { type: DataType.STRING, allowNull: false },
    senha: DataType.STRING,
    aniversario: DataType.DATE,
    email: DataType.TEXT
  }, {
    /* Propriedades */
    createdAt: "createdAt", // OR false
    updatedAt: "updatedAt" // OR false

  });

  return Usuario;

};