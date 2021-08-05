import './style.css';
import { Component } from 'react';
import axios from 'axios';
import logoImg from '../assets/img/Group 35.png'

class cadastroSalas extends Component{
  constructor(props){
    super(props);
    this.state = {
        andar : '',
        nome : '',
        metragem : ''
    }
  }

  CadastrarSala = (event) => {
      event.preventDefault();

      fetch('http://localhost:5000/api/salas', {

      method : 'POST',

      body : JSON.stringify({andar : this.state.andar, nome : this.state.nome, metragem : this.state.metragem}),

      headers : {
        "Content-Type" : "application/json"
        }
      })

      console.log('Deu certo')

  }

  funcaoMudaState = (campo) => {
    this.setState({[campo.target.name] : campo.target.value})
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
                <form onSubmit={this.CadastrarSala} class="contentCadastro">
                    <div class="contentInput dis">
                        <div class="tituloCadastro">
                            <p> Nome </p>
                        </div>
                        <input class="inputsCadastros" name='nome' value={this.state.nome} onChange={this.funcaoMudaState} type="text" placeholder="Digite um nome"/>
                    </div>
                    <div class="contentInput dis">
                        <div class="tituloCadastro">
                            <p> Andar </p>
                        </div>
                        <select name="andar" value={this.state.andar} onChange={this.funcaoMudaState} class="selectCadastros" id="">
                            <option value="0">Selecione um andar</option>
                            <option value="1">1º andar</option>
                            <option value="2">2º andar</option>
                            <option value="3">3º andar</option>
                            <option value="4">4º andar</option>
                        </select>
                    </div>
                    <div class="contentInput dis">
                        <div class="tituloCadastro">
                            <p> Metragem </p>
                        </div>
                        <input class="inputsCadastros" type="text" name='metragem' value={this.state.metragem} onChange={this.funcaoMudaState} placeholder="Digite a metragem"/>
                    </div>
                    <button type='submit'> Cadastrar </button>
                </form>
            </div>
        </section>
    </section>

    )
  }
}

export default cadastroSalas;