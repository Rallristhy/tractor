'use strict';

module.exports = function(sequelize, DataType) {

	const Usuario = sequelize.define("usuario", {
	    id_usuario: { type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
	    nome: { type: DataType.STRING(16), allowNull: false },
	    sobrenome: { type: DataType.STRING(32), allowNull: false },
	    data_nascimento: { type: DataType.DATE, allowNull: false },
	    email: { type: DataType.STRING(64), allowNull: false },
	    senha: { type: DataType.STRING(64), allowNull: false },

		id_oficina: {
		   type: DataType.INTEGER,

		   references: {
		     model: 'oficina',
		     key: 'id_oficina',
		     deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
		   }
		},

	  }, {
	    /* Propriedades */
	    createdAt: "createdAt",
	    updatedAt: "updatedAt",
      	tableName: "usuario"
	  });

	return Usuario;
};	