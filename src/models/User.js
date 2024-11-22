


class User {
    constructor(id, username, email, senha, vitorias, desistencias) {
      this.id = id; 
      this.username = username; 
      this.email = email; 
      this.senha = senha
      this.vitorias = vitorias
      this.desistencias = desistencias
    } 
  
    
    toJSON() {
      return {
        username: this.username,
        email: this.email,
        senha: this.senha,
        vitorias: this.vitorias,
        desistencias: this.desistencias
      };
    }
  }
  
  export default User;
  