'use strict';

module.exports = function(sequelize, DataType) {
	const Cidade = sequelize.define("cidades", {
	    id_cidade: { type: DataType.INTEGER, primaryKey: true, autoIncrement: true },
	    cod_cidade: { type: DataType.INTEGER, allowNull: false },
	    cidade: { type: DataType.STRING(32), allowNull: false }
	  }, {
	    /* Propriedades */
	    createdAt: "createdAt",
	    updatedAt: "updatedAt",

	  });

	return Cidade;
};	