'use strict';

module.exports = function(sequelize, DataType) {

	const Estado = sequelize.define("estados", {
	    id_estado: { type: DataType.INTEGER, primaryKey: true, autoIncrement: true },
	    uf: { type: DataType.CHAR(2), allowNull: false },
	    estado: { type: DataType.STRING(32), allowNull: false }
	  }, {
	    /* Propriedades */
	    createdAt: "createdAt",
	    updatedAt: "updatedAt",

	  });

	return Estado;
};	