
// src/models/User.js

class User {
    constructor(id, username, email, senha, vitorias, desistencias) {
      this.id = id; // ID único do usuário (pode ser o UID do Firebase)
      this.username = username; // Nome de usuário
      this.email = email; // Email do usuário
      this.senha = senha
      this.vitorias = vitorias
      this.desistencias = desistencias
    } 
  
    // Método para converter a instância em um objeto que pode ser armazenado no Firebase
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
  