import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import cadastroSala from './pages/cadastroSala';
import salas from './pages/listarSalas';
import Login from './pages/Login';

const rotas = (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/salas" component={salas} />
      <Route path="/cadastroSalas" component={cadastroSala} />
    </Switch>
  </Router>
)

ReactDOM.render(rotas, document.getElementById('root'));
