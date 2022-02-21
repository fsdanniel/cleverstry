import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import "../styles/pages/signup-page.css";

export default function CreateWQ() {
    
return(

    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Criar WQs</legend>

            <div className="input-block">
              <label htmlFor="name">Título</label>
              <input id="name" placeholder="Digite o título da WQ"/>
            </div>

            <div className="input-block">
              <label htmlFor="name">Instituição</label>
              <input id="name" placeholder="Digite sua instituição"/>
            </div>

            <div className="input-block">
              <label htmlFor="name" >Nivel Escolar</label>
              <input id="name" placeholder="Digite o nível escolar" />
            </div>
            <div className="input-block">
              <label htmlFor="name" >Tópico</label>
              <input id="name" placeholder="Digite o assunto da WQ" />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Descrição <span>Máximo de 300 caracteres</span>
              </label>
              <textarea placeholder="Digite a descrição da WQ" id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {}
                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
              <input multiple type="file" id="image[]" />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button">Sim</button>

                <button type="button">Não</button>
              </div>
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

