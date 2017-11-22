class Usuario {

  constructor(nome, sobrenome) {
  	this.nome = nome;
    this.sobrenome = sobrenome;
  }

  getUsuario(){
  	console.log(this.nome+" "+this.sobrenome);
  }

}

const u = new Usuario("Rallristhy", "Alves");
//console.log(u.nome);
u.getUsuario();