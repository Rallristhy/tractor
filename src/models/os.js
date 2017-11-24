'use strict';

module.exports = function(sequelize, DataType) {

	const Os = sequelize.define("os", {
	    id_os: { type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
	    status: { type: DataType.STRING(16), allowNull: false },
	    data_entrada: { type: DataType.DATE, allowNull: false },
	    data_encerramento: { type: DataType.DATE, allowNull: true },
	    observacao: { type: DataType.STRING(1024), allowNull: true },
	    tipo: { type: DataType.STRING(3), allowNull: false },

		id_cliente: {
		   type: DataType.INTEGER,

		   references: {
		     model: 'cliente',
		     key: 'id_cliente',
		     deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
		   },
		   allowNull: false,
		   onDelete: "cascade",
		   onUpdate: "cascade"
		},

		id_veiculo: {
		   type: DataType.INTEGER,

		   references: {
		     model: 'veiculo',
		     key: 'id_veiculo',
		     deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
		   },
		   allowNull: false,
		   onDelete: "cascade",
		   onUpdate: "cascade"
		},

		id_usuario: {
		   type: DataType.INTEGER,

		   references: {
		     model: 'usuario',
		     key: 'id_usuario',
		     deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
		   },
		   allowNull: false,
		   onDelete: "cascade",
		   onUpdate: "cascade"
		},

		id_mecanico: {
		   type: DataType.INTEGER,

		   references: {
		     model: 'mecanico',
		     key: 'id_mecanico',
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
      	tableName: "os"
	});

	return Os;
};	