import './style.css';
import { Component } from 'react';
import axios from 'axios';
import logoImg from '../assets/img/Group 35.png'

class cadastroSalas extends Component{
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
        localStorage.setItem('token-login', resposta.data.token)
        this.props.history.push('/listarSalas')
      }
    })

    .catch(error => console.log(error))

    // funcaoMudaState =(campo)=> {
    //   this.setState({[campo.target.name] : campo.target.value})
    // }
  }

  render(){
    return(
      
<section class="corpo dis ">
        <div class="barra-lateral dis column ali">
            <div class="barraContent dis column ali spa">
                <img src={logoImg} alt="logo"/>

                    <h1>Ola, Gabriel</h1>

                <div class="links dis column spa">
                    <h2>Salas</h2>
                    <h2>Equipamentos</h2>
                    <h2>Dashboard</h2>
                    <h2>Cadastro sala</h2>
                    <h2>Cadastro equip.</h2>
                </div>
            </div>
        </div>
        <section class="content dis column ali jus">

            <div class="contentTitulo">
                <div class="tituloPagina">
                    <p>Cadastro de salas</p>
                </div>
            </div>

            <div class="areaCadastro">
                <div class="contentCadastro">
                    <div class="contentInput dis">
                        <div class="tituloCadastro">
                            <p> Nome </p>
                        </div>
                        <input class="inputsCadastros" type="text" placeholder="Digite um nome"/>
                    </div>
                    <div class="contentInput dis">
                        <div class="tituloCadastro">
                            <p> Andar </p>
                        </div>
                        <select name="selectCadastro" class="selectCadastros" id="">
                            <option value="0">Selecione um andar</option>
                            <option value="1">1º andar</option>
                            <option value="1">2º andar</option>
                            <option value="1">3º andar</option>
                            <option value="1">4º andar</option>
                        </select>
                    </div>
                    <div class="contentInput dis">
                        <div class="tituloCadastro">
                            <p> Metragem </p>
                        </div>
                        <input class="inputsCadastros" type="text" placeholder="Digite a metragem"/>
                    </div>
                </div>
                
                <button> Cadastrar </button>
            </div>
        </section>
    </section>
    )
  }
}

export default cadastroSalas;