import './style.css';
import { Component } from 'react';
import logoImg from '../assets/img/Group 35.png'


class cadastroEquipamento extends Component{
  constructor(props){
    super(props);
    this.state = {
        ListaSalas : [],
        ListaTipoEquipamento : [],
        TipoEquipamento : '',
        IdSala : '',
        situacao : '',
        marca : '',
        numeroSerie : '',
        numeroPatrimonio : '',
        descricao : '',
    }
  }

  CadastrarEquipamento = (event) => {
      event.preventDefault();

      fetch('http://localhost:5000/api/salas', {

      method : 'POST',

      body : JSON.stringify({IdTipoEquipamento : this.state.TipoEquipamento, IdSala : this.state.IdSala, situacao : this.state.situacao, marca : this.state.marca, numeroSerie : this.state.numeroSerie, numeroPatrimonio : this.state.numeroPatrimonio, descricao : this.state.descricao}),

      headers : {
        "Content-Type" : "application/json"
        }
      })

      console.log('Deu certo')

  }

  ListarSalas = () => {
    fetch('http://localhost:5000/api/Salas')

    .then(resposta => resposta.json())

    //.then(resposta => console.log(this.state.l))

    .then(dados => this.setState({ListaSalas : dados}))

    .catch((erro) => console.log(erro))

  }

  ListaEquipamentos = () => {
    fetch('http://localhost:5000/api/TipoEquipamento')

    .then(resposta => resposta.json())

    .then(dados => this.setState({ListaTipoEquipamento : dados}))

    .catch((erro) => console.log(erro))

  }

  funcaoMudaState = (campo) => {
    this.setState({[campo.target.name] : campo.target.value})
  }

  componentDidMount(){
    this.ListarSalas();
    this.ListaEquipamentos();
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
                    <p>Cadastro de equipamentos</p>
                </div>
            </div>

            <div class="areaCadastro">
                <div class="contentCadastroEquipamento">
                    <div class="contentInput dis">
                        <div class="tituloCadastroBig">
                            <p> Marca </p>
                        </div>
                        <input class="inputsCadastros" name='marca' value={this.state.marca} type="text" placeholder="Digite o nome da marca"/>
                    </div>
                    <div class="contentInput dis">
                        <div class="tituloCadastroBig">
                            <p> Andar </p>
                        </div>
                        <select name="andar" value={this.state.IdSala} class="selectCadastros" id="">
                            <option value="0">Selecione uma sala</option>
                            <option value="1">1º andar</option>
                            <option value="1">2º andar</option>
                            <option value="1">3º andar</option>
                            <option value="1">4º andar</option>
                        </select>
                    </div>

                    <div class="contentInput dis">
                        <div class="tituloCadastroBig">
                            <p> Tipo Equipamento </p>
                        </div>
                        <select name="andar" value={this.state.IdSala} class="selectCadastros" id="">
                            <option value="0">Selecione um tipo de equipamento</option>
                            <option value="1">1º andar</option>
                            <option value="1">2º andar</option>
                            <option value="1">3º andar</option>
                        </select>
                    </div>
                    
                    <div class="contentInput dis">
                        <div class="tituloCadastroBig">
                            <p> Num. de série </p>
                        </div>
                        <input class="inputsCadastros" type="text" name='numero de serie' value={this.state.numeroSerie} placeholder="Digite o número de série"/>
                    </div>
                    <div class="contentInput dis">
                        <div class="tituloCadastroBig">
                            <p> Num. de patrimônio </p>
                        </div>
                        <input class="inputsCadastros" name='numero patrimonio' value={this.state.numeroPatrimonio} type="text" placeholder="Digite o número de patrimônio"/>
                    </div>
                    <div class="contentInput dis">
                        <div class="tituloCadastroBig">
                            <p> Situação </p>
                        </div>
                        <input class="inputsCadastros" name='situação' value={this.state.situacao}type="text" placeholder=""/>
                    </div>
                    <div class="contentInput dis">
                        <div class="tituloCadastroBig">
                            <p> Descrição </p>
                        </div>
                        <input class="inputsCadastros" name='descrição' value={this.state.descricao}type="text" placeholder=""/>
                    </div>
                </div>
                
                <button> Cadastrar </button>
            </div>
        </section>
    </section>
    )
  }

}
export default cadastroEquipamento;