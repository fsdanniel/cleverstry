import { Link } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineFacebook} from "react-icons/ai";
import '../styles/components/hero.css'
import Logo from '../images/icon-32x32.png'

export default function Hero(){
    return(
 <header className="header-area">
        <div className="header-wrapper">
          <div className="left-header">
            <img className="image" src={Logo} alt="Cy" />
          </div>

          <div className="right-header">
            <button className="button-app">
              <Link to="">
                <AiOutlineInstagram size={36} color="#FFF"/>
                </Link>
            </button>
            <button className="button-app">
              <Link to="">
              <AiOutlineTwitter size={34} color="#FFF"/>
                </Link>
            </button>
            <button className="button-app">
              <Link to="">
              <AiOutlineFacebook size={36} color="#FFF"/>
                </Link>
            </button>
          </div>
        </div>

        <div className="landing-area">
          <div className="name">
            <h1>Cleverstry.</h1>
          </div>

          
            <h3 className="slogan">Onde sua aprendizagem é significativa!</h3>

            <p className="bottom-slogan">
              Explore nossos recursos e conheça um novo mundo de conhecimento
            </p>
          
        </div>
      </header>
    )
}