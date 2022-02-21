import React, { useEffect, useState, useRef } from "react";

import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";

import "../styles/pages/home-page.css";
import "../styles/pages/signup-page.css";
import "../styles/global.css"
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Popup from "../components/Popup";

export default function HomePage() {

   const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
  
  return (
    <div id="home-page" className="page">
     <Hero/>

      <section>
        <aside id="menu">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/webquests/about">WebQuests</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </aside>

        <main className="main-wrapper">
          <header className="header-wq">
            <h1>Minhas WQs</h1>
            <div className="new-wq">
             <button onClick={(e) => setVisibility(!visibility)}> <FiPlus size={24} color="#3a83be"/> </button>
             
              
            </div>
          </header>

          <section className="wq-wrapper">
            <div className="wq-view">
              <div className="content">
              <div className="padding"></div>
              <h2 className="wq-title">Afinal, o que são WebQuests?</h2>
              <p className="wq-author">Cleverstry</p>
              </div>
              
            </div>
              <Popup
        onClose={popupCloseHandler}
        show={visibility}
        title="Criar WQs"
      >
         <div className="input-block">
              <label htmlFor="name">Código</label>
              <input id="name" placeholder="Insira o código da WQ"/>
            </div>

            <button className="confirm-button" type="submit">
            Confirmar
          </button>

          <button className="confirm-button" type="submit">
            Criar uma nova WQ
          </button>
      </Popup>
          </section>
          

        </main>
      </section>

      <Footer/>
    </div>
  );
}
