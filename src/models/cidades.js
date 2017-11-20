'use strict';

module.exports = function(sequelize, DataType) {
	const Cidade = sequelize.define("cidades", {
	    id_cidade: { type: DataType.INTEGER, primaryKey: true, autoIncrement: true },
	    cod_cidade: { type: DataType.INTEGER, allowNull: false },
	    cidade: { type: DataType.STRING(32), allowNull: false },
	    id_estado: {
		   type: DataType.INTEGER,

		   references: {
		     model: 'estados',
		     key: 'id_estado',
		     deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
		   }
		}
	  }, {
	    /* Propriedades */
	    createdAt: "createdAt",
	    updatedAt: "updatedAt",

	  });

	return Cidade;
};	