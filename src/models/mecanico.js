'use strict';

module.exports = function(sequelize, DataType) {

	const Mecanico = sequelize.define("mecanico", {
	    id_mecanico: { type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
	    nome: { type: DataType.STRING(16), allowNull: false },
	    sobrenome: { type: DataType.STRING(32), allowNull: false },
	    data_nascimento: { type: DataType.DATE, allowNull: false },

		id_oficina: {
		   type: DataType.INTEGER,

		   references: {
		     model: 'oficina',
		     key: 'id_oficina',
		     deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
		   },
		   onDelete: "cascade",
		   onUpdate: "cascade"
		},

	}, {
	    /* Propriedades */
	    createdAt: "createdAt",
	    updatedAt: "updatedAt",
      	tableName: "mecanico"
	});

	return Mecanico;
};	