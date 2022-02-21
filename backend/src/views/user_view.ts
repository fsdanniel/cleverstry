import User from "../models/User";


export default {
  render(user: User) {
    return {
        //renderiza um unico usuario
      id: user.id,
      name: user.name,
      user: user.username,
      email: user.email,
      password: user.password
    };
  },

  renderMany(users: User[]){
     // renderiza vários usuários;
    return users.map(user => this.render(user));
  }

};
