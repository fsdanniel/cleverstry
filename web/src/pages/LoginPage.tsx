import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import "../styles/pages/signup-page.css";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

export default function LoginPage() {
  return (
    
    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Entrar</legend>

            <div className="input-block">
              <label htmlFor="name">Usuário</label>
              <input id="name" placeholder="Digite seu nome de usuário" />
            </div>

            <div className="input-block">
              <label htmlFor="name">Senha</label>
              <input id="name" placeholder="Digite sua senha" />
            </div>

           

          <button className="confirm-button" type="submit">
            Entrar
          </button>
          </fieldset>
        </form>
      </main>
    </div>
    
  );
}