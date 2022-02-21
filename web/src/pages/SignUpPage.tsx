import React, { ChangeEvent, FormEvent, useState } from "react";


import { FiPlus } from "react-icons/fi";
import api from "../services/api";

import "../styles/pages/signup-page.css";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [username , setUsername] = useState('')
  
  async function handleSubmit(event: FormEvent){
    event.preventDefault() // impede a pagina de recarregar quando o form é enviado


    const data = new FormData() //devido a utilização de imagens, não se pode usar Json por isso utilizamos isso 

    data.append('name', name)
    data.append('email', email)
    data.append('username', username)
    data.append('password', password)
    


    await api.post('orphanages', data)

    alert('Cadstro realizado com sucesso!')
    navigate('/login') //redireciona o user para a pagina /app
  }
  
  
  return (
    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Cadastre-se</legend>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name"  value={name} 
              onChange={event => setName(event.target.value)} placeholder="Digite seu nome"/>
            </div>

            <div className="input-block">
              <label htmlFor="username">Usuário</label>
              <input id="username"  value={username} 
              onChange={event => setUsername(event.target.value)} placeholder="Digite seu nome de usuário"/>
            </div>

            <div className="input-block">
              <label htmlFor="email">Email</label>
              <input id="email"  value={email} 
              onChange={event => setEmail(event.target.value)} placeholder="Digite seu email"/>
            </div>

            <div className="input-block">
              <label htmlFor="password">Senha</label>
              <input type="password"  value={password} 
              onChange={event => setPassword(event.target.value)} id="password" placeholder="Digite sua senha"/>
            </div>


           
          </fieldset>

        
          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>

      
    </div>
  );
}
