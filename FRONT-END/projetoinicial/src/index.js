import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import salas from './pages/listarSalas';
import Login from './pages/Login';
import Equipamentos from './pages/listarEquipamento';

const rotas = (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/salas" component={salas} />
      <Route path="/Equipamentos" component={Equipamentos}/>
    </Switch>
  </Router>
)

ReactDOM.render(rotas, document.getElementById('root'));
