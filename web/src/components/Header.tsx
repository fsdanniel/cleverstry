import { Link } from "react-router-dom";
import Logo from '../images/icon-32x32.png' 
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineFacebook} from "react-icons/ai";
import '../styles/components/hero.css'
export default function Header(){
    return(

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
    )
}