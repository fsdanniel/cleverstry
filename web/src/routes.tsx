import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About"
import Contact from "./pages/Contact"
import CreateWQ from "./pages/CreateWQ"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import WQPage from "./pages/WQPage"
import Introduction from "./pages/WQ/1-Introduction"
import Task from "./pages/WQ/2-Task"
import Process from "./pages/WQ/3-Process"
import Fonts from "./pages/WQ/4-Fonts"
import Orientation from "./pages/WQ/5-Orientation"
import Conclusion from "./pages/WQ/6-Conclusion"
import Credits from "./pages/WQ/7-Credits"

function LinksRoutes() {
  return (
  <BrowserRouter>
  <Routes>
    {/*Switch e Routes faz com que apenas uma rota seja chamada ao mesmo tempo*/}
  <Route path="/"  element={<LandingPage/>}/>
  {/*o argumento exact é utilizado na v5 para que as rotas sejam completamente verificadas, evitando carregar duas pages diferentes na mesma tela */}
  <Route path="/home" element={<HomePage/>}/>
  <Route path="/about" element={<About/>}/>
 <Route path="/contact" element={<Contact/>}/>
  <Route path="/webquests/create" element={<CreateWQ/>}/>
  <Route path="/login" element={<LoginPage/>}/>
  <Route path="/signup" element={<SignUpPage/>}/>
  <Route path="/webquests/about" element={<WQPage/>}/>
  <Route path="/webquests/create/intro" element={<Introduction/>}/>
  <Route path="/webquests/create/task" element={<Task/>}/>
  <Route path="/webquests/create/process" element={<Process/>}/>
  <Route path="/webquests/create/fonts" element={<Fonts/>}/>
  <Route path="/webquests/create/orientation" element={<Orientation/>}/>
  <Route path="/webquests/create/conclusion" element={<Conclusion/>}/>
  <Route path="/webquests/create/credits" element={<Credits/>}/>
  

  </Routes>
  </BrowserRouter>
  );
}


export default LinksRoutes;