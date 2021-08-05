import './style.css';
import { Component } from 'react';
import axios from 'axios';
import imagemLogin from '../assets/img/Group 38 (1).png'

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email : '',
      senha : '', 
      erroMensagem : ''
    }
  }

  login = (event) => {

    event.preventDefautl();

    axios.post('http://localhost:5000/api/Equipamentos', {
      email : this.state.email,
      senha : this.state.senha
    })

    .then (resposta => {
      if(resposta.status === 200){
        localStorage.setItem('token-login', resposta.data.token);
        this.props.history.push('/cadastroSalas');
      }
    })

    .catch(error => console.log(error))

  }

  funcaoMudaState = (campo) => {
    this.setState({[campo.target.name] : campo.target.value})
  }

  render(){
    return(
      <section>
        <section className="contentLogin dis ali">
          <div>
              <img src={imagemLogin} className= "loginImg" alt=""/>
          </div>
          <form onSubmit={this.login} className="areaLogin dis column">
            <h1 className="tituloLogin">Faça seu login</h1>

            <input type="text" className="inputsLogin" onChange={this.funcaoMudaState} placeholder="E-Mail"/>
            <input type="text" className="inputsLogin" onChange={this.funcaoMudaState} placeholder="Senha"/>

            <button type="submit">Login</button>
        </form>
        </section>
      </section>
    )
  }
}

export default Login;
