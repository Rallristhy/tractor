'use strict';

module.exports = function(sequelize, DataType) {

	const Servico = sequelize.define("servicos", {
	    id_servico: { type: DataType.INTEGER, primaryKey: true, autoIncrement: true },
	    descricao: { type: DataType.STRING(128), allowNull: false },
	    preco: { type: DataType.DECIMAL(16, 2), allowNull: false }
	}, {
	    /* Propriedades */
	    createdAt: "createdAt",
	    updatedAt: "updatedAt",

	});

	return Servico;
};	