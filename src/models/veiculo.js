'use strict';

module.exports = function(sequelize, DataType) {

	const Veiculo = sequelize.define("veiculo", {
	    id_veiculo: { type: DataType.INTEGER, primaryKey: true, autoIncrement: true },
	    nome: { type: DataType.STRING(16), allowNull: false },
	    telefone: { type: DataType.STRING(32), allowNull: true },
	    contato: { type: DataType.STRING(32), allowNull: true },

		id_fabricante: {
		   type: DataType.INTEGER,

		   references: {
		     model: 'fabricante',
		     key: 'id_fabricante',
		     deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
		   },
		   allowNull: false,
		   onDelete: "cascade",
		   onUpdate: "cascade"
		},
	}, {
	    /* Propriedades */
	    createdAt: "createdAt",
	    updatedAt: "updatedAt",
	    tableName: "veiculo"

	});

	return Veiculo;
};	