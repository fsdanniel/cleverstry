import React from "react";
import {FiArrowRight} from 'react-icons/fi';
import '../styles/global.css';
import '../styles/pages/landing-page.css'
import Logo from "../images/icon-192x192.png"
import {Link} from 'react-router-dom';
{/*Importação utilizada para que seja possivel realizar SPA substitui a tag <a> não possui refresh!!!*/}

export default function  LandingPage(){
    return(
        <div id="page-landing">

        <div className="page-40">
        <div className="image">
        <img src={Logo} alt="Cy" />
        </div>
        </div>

        <div className="content-wrapper">
            
            <header>
            <h1>Cleverstry</h1>
            </header>
            
            <main>
              <h1>Onde sua aprendizagem é significativa!</h1>
              <p>Utilize do poder das WebQuests e transforme a sua maneira de aprender</p>
            </main>

            <div className="button-container">
             <button className="button-app">
            <Link className="b-next" to="/login" >
              Entrar
        
              </Link>
              </button> 

            <button className="button-app">
            <Link className="b-next" to="/signup">
              Cadastre-se
        
              </Link>

            </button>
            
              </div>
        </div>

      </div>
    );

}
