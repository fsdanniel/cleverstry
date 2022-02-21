import Sidebar from "../../components/Sidebar";
import "../../styles/pages/WQ/intro.css";
import Page from "../../components/Page";
import "../../styles/global.css";
import { HTMLRenderer } from "ory-editor-renderer";
import ReactDOMServer from "react-dom/server";

export default function Introduction() {
    const doneHandler = (value, plugins) => {
        console.log(value, plugins);
        const html = ReactDOMServer.renderToString(
          <HTMLRenderer state={value} plugins={plugins} />
        );
        console.log("html", html);
      };
    return(
        <div className="intro-wrapper">
 <Sidebar/>
 <div className="padding">
   <h1>Introdução</h1>
 </div>
 <Page done={doneHandler} />
        </div>

    )
}