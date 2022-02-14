import { Link } from "react-router-dom";
import '../styles/components/hero.css'
export default function Header(){
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
      </header>
    )
}