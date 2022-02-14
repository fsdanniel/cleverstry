import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../styles/pages/signup-page.css";
import "../styles/global.css";
export default function Contact() {
  return (
     <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Entre em contato</legend>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="name">Email</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>


          </fieldset>

          <button className="confirm-button" type="submit">
            Enviar
          </button>
        </form>
      </main>
    </div>
  );
}
