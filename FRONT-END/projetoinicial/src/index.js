import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import cadastroSala from './pages/cadastroSala';
import salas from './pages/listarSalas';
import Login from './pages/Login';
import Equipamentos from './pages/listarEquipamento';
import cadastroEquipamento from './pages/cadastroEquipamento';

const rotas = (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/salas" component={salas} />
      <Route path="/cadastroSala" component={cadastroSala} />
      <Route path="/Equipamentos" component={Equipamentos}/>
      <Route path="/cadastroEquipamento" component={cadastroEquipamento}/>
    </Switch>
  </Router>
)

ReactDOM.render(rotas, document.getElementById('root'));
