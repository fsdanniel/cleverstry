import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/pages/wq-page.css";
import "../styles/pages/signup-page.css";
import "../styles/global.css";
import { AiOutlineRead } from "react-icons/ai";
export default function WQPage() {
  return (
    <div id="wq-about-wrapper" className="page">
      <Sidebar />
      <Header />

      <main className="about">
        <form className="section">
          <fieldset>
          <div className="icon">
                <AiOutlineRead size={80} color="#0a0f4e"/>
              </div>
              <div className="content">
                <h1>Introdução</h1>
                <p>
                  Nessa seção deverá ser apresentado o tema principal da
                  Webquest, abordando informações iniciais básicas para guiar o
                  aluno.
                </p>
              </div>
          </fieldset>
        </form>
      </main>

 

    </div>
  );
}
