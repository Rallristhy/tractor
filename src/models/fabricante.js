'use strict';

module.exports = function(sequelize, DataType) {

	const Fabricante = sequelize.define("fabricante", {
	    id_fabricante: { type: DataType.INTEGER, primaryKey: true, autoIncrement: true },
	    nome: { type: DataType.STRING(16), allowNull: false },
	    telefone: { type: DataType.STRING(32), allowNull: false },
	    contato: { type: DataType.STRING(32), allowNull: true }
	}, {
	    /* Propriedades */
	    createdAt: "createdAt",
	    updatedAt: "updatedAt",
	    tableName: "fabricante"

	});

	return Fabricante;
};	