import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set, get, update } from 'firebase/database';
import firebaseApp from './firebase';
import User from './models/User';

class ApiService {
  // Função para registrar um novo usuário
  async registerUser(username, email, password, confirmPassword) {
    if (password !== confirmPassword) {
      throw new Error("As senhas não coincidem.");
    }

    const auth = getAuth(firebaseApp);
    const db = getDatabase(firebaseApp);

    try {
      // Criar usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      // Criar um novo objeto User
      const newUser = new User(firebaseUser.uid, username, email, password, 0, 0);

      // Salvar o usuário no Firebase Realtime Database
      await set(ref(db, 'users/' + firebaseUser.uid), newUser.toJSON());

      return newUser; // Retorna o usuário criado
    } catch (err) {
      throw new Error('Erro ao registrar o usuário: ' + err.message);
    }
  }

  // Função para atualizar dados do usuário
  async atualizarDadosUsuario(campo) {
    const auth = getAuth(firebaseApp);
    const db = getDatabase(firebaseApp);
    const user = auth.currentUser;

    if (user) {
      const userRef = ref(db, `users/${user.uid}`);

      try {
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          const userData = snapshot.val();
          const novoValor = campo === 'vitorias' ? (userData.vitorias || 0) + 1 : (userData.desistencias || 0) + 1;
          
          // Atualizar o campo especificado no Firebase
          await update(userRef, {
            [campo]: novoValor,
          });
        }
      } catch (err) {
        throw new Error('Erro ao atualizar os dados do usuário: ' + err.message);
      }
    }
  }

  async fetchUsers() {
    const database = getDatabase();
    const usersRef = ref(database, 'users');
    try {
      const snapshot = await get(usersRef);
      if (snapshot.exists()) {
        const usersData = snapshot.val();
        const usersArray = Object.values(usersData);

        // Ordena os usuários com base nas vitórias
        usersArray.sort((a, b) => b.vitorias - a.vitorias);

        return usersArray;
      } else {
        throw new Error("Nenhum usuário encontrado.");
      }
    } catch (err) {
      throw new Error("Erro ao carregar os dados dos usuários.");
    }
  }

   // Função para realizar login com email e senha
   async login(email, password) {
    const auth = getAuth();
    try {
      // Realiza o login com o Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user; // Retorna o usuário autenticado
    } catch (err) {
      throw err; // Lança o erro para ser tratado no componente
    }
  }
}

export default new ApiService();
