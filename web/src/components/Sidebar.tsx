import React from 'react';
import Logo from '../images/icon-32x32.png' 
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import '../styles/components/sidebar.css'

export default function Sidebar(){
  const navigate = useNavigate();
  return (
    <aside className="app-sidebar">
        <img src={Logo} alt="Cy" />

        <footer>
          <button type="button" onClick={()=> navigate(-1)}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
)
}