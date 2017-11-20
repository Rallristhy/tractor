'use strict';

module.exports = function(sequelize, DataType) {

	const Oficina = sequelize.define("oficina", {
	    id_oficina: { type: DataType.INTEGER, primaryKey: true, autoIncrement: true, sequenceName: "oficina_seq" },
	    raz_social: { type: DataType.STRING(64), allowNull: false },
	    endereco: { type: DataType.STRING(128), allowNull: false },
	    numero: { type: DataType.INTEGER, allowNull: false },
	    bairro: { type: DataType.STRING(32), allowNull: false },
	    cep: { type: DataType.STRING(32), allowNull: false },
	    telefone: { type: DataType.STRING(32), allowNull: false },
	    contato: { type: DataType.STRING(32), allowNull: false },

		id_cidade: {
		   type: DataType.INTEGER,

		   references: {
		     model: 'cidades',
		     key: 'id_cidade',
		     deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
		   }
		},

	  }, {
	    /* Propriedades */
	    createdAt: "createdAt",
	    updatedAt: "updatedAt",
      	tableName: "oficina"
	  });

	return Oficina;
};	