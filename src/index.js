import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import Home from './pages/Home'
// Desafio master blaster na descrição
const Pagina404 = () => (
  <div>Página404</div>
)


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/" component={Pagina404}/>
  </Switch>
  </BrowserRouter>,
document.getElementById('root')
  
/*<React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')*/
);

