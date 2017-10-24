const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataType) { //DataType é o Sequelize original

  const Usuario = sequelize.define("usuario", {
    id: { type: DataType.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataType.STRING(32), allowNull: false },
    sobrenome: { type: DataType.STRING, allowNull: false },
    senha: DataType.STRING,
    aniversario: DataType.DATE,
    email: DataType.TEXT
  }, {
    /* Propriedades */
    createdAt: "createdAt", // OR false
    updatedAt: "updatedAt", // OR false

    hooks: {
      /* Antes de criar um usuário encripta a senha */
      beforeValidate: (usu, options) => {

        console.log("Aqui é antes da criação!..."+ usu.senha);

        /* Gera um salt(chave derivada de hash) */
        const salt = bcrypt.genSaltSync()

        /* Seta a senha encriptada ao campo password */
        usu.set("senha", bcrypt.hashSync(usu.senha, salt));

      },
      afterValidate: (usu, options) => {
        console.log("Aqui é depois da criação!..."+ usu.senha);
      }
    },

    /* Métodos pertencentes ao usuário */
    classMethods: {
      /* Compara a senha digitada com a gravada encriptada no banco */
      verificaSenha: (encodedPassword, password) =>  {
        bcrypt.compareSync(password, encodedPassword)
      }
    }

  });

  return Usuario;

};