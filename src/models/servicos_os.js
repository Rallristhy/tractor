'use strict';

module.exports = function(sequelize, DataType) {

	const Servico_os = sequelize.define("servicos_os", {
	    id_servico_os: { type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
	    quantidade: { type: DataType.INTEGER, allowNull: false },
	    desconto: { type: DataType.DECIMAL(16, 2), allowNull: false },

		id_os: {
		   type: DataType.INTEGER,

		   references: {
		     model: 'os',
		     key: 'id_os',
		     deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
		   },
		   allowNull: false,
		   onDelete: "cascade",
		   onUpdate: "cascade"
		},

		id_servico: {
		   type: DataType.INTEGER,

		   references: {
		     model: 'servicos',
		     key: 'id_servico',
		     deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
		   },
		   allowNull: false,
		   onDelete: "cascade",
		   onUpdate: "cascade"
		}

	}, {
	    /* Propriedades */
	    createdAt: "createdAt",
	    updatedAt: "updatedAt",
      	tableName: "servicos_os"
	});

	return Servico_os;
};	