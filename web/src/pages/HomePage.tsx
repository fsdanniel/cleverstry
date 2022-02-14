import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import "../styles/pages/home-page.css";
import "../styles/global.css"
import Hero from "../components/Hero";
import Footer from "../components/Footer";


export default function HomePage() {
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
            <div className="new-wq"></div>
          </header>

          <section className="wq-wrapper">
            <div className="wq-view">
              <div className="content">
              <div className="padding"></div>
              <h2 className="wq-title">Afinal, o que são WebQuests?</h2>
              <p className="wq-author">Cleverstry</p>
              </div>
              
            </div>
            
          </section>
          
        </main>
      </section>

      <Footer/>
    </div>
  );
}
