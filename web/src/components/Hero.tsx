import { Link } from "react-router-dom";
import '../styles/components/hero.css'
export default function Hero(){
    return(
 <header className="header-area">
        <div className="header-wrapper">
          <div className="left-header">
            <img src="" alt="Logo" />
          </div>

          <div className="right-header">
            <button className="button-app">
              <Link to="">Instagram</Link>
            </button>
            <button className="button-app">
              <Link to="">Twitter</Link>
            </button>
            <button className="button-app">
              <Link to="">Facebook</Link>
            </button>
          </div>
        </div>

        <div className="landing-area">
          <div className="name">
            <h1>Cleverstry.</h1>
          </div>

          <div className="slogan">
            <h3>Onde sua aprendizagem é significativa!</h3>

            <p>
              Explore nossos recursos e conheça um novo mundo de conhecimento
            </p>
          </div>
        </div>
      </header>
    )
}