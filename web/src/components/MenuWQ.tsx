import { Link } from "react-router-dom";
import '../styles/components/menu.css'
export default function Hero(){
    return(
<div>
<aside id="menu">
          <ul>
            <li>
              <Link to="/webquests/create/intro">Introdução</Link>
            </li>
            <li>
              <Link to="/webquests/create/task">Tarefa</Link>
            </li>
            <li>
              <Link to="/webquests/create/process">Processo</Link>
            </li>
            <li>
              <Link to="/webquests/create/fonts">Fonte</Link>
            </li>
            <li>
              <Link to="/webquests/create/orientation">Orientação</Link>
            </li>
            <li>
              <Link to="/webquests/create/conclusion">Conclusão</Link>
            </li>
            <li>
              <Link to="/webquests/create/credits">Créditos</Link>
            </li>
          </ul>
        </aside>
</div>
    )}