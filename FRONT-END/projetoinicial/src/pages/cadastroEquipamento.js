import './style.css';
import { Component } from 'react';
import logoImg from '../assets/img/Group 35.png'
import { Link } from 'react-router-dom';
import axios from 'axios';


class cadastroEquipamento extends Component{
  constructor(props){
    super(props);
    this.state = {
        ListaSalas : [],
        ListaTipoEquipamento : [],
        TipoEquipamento : '',
        IdSala : '',
        marca : '',
        numeroSerie : '',
        numeroPatrimonio : '',
        descricao : '',
    }
  }

  CadastrarEquipamento = (event) => {

      event.preventDefault();

        axios.post('http://localhost:5000/api/Equipamentos', {
            idTipoEquipamento : this.state.TipoEquipamento,
            idSala : this.state.IdSala, 
            situacao : parseInt(0), 
            marca : this.state.marca, 
            numeroSerie : this.state.numeroSerie, 
            numeroPatrimonio : this.state.numeroPatrimonio, 
            descricao : this.state.descricao
        })
        .then(resposta => {
            if(resposta.status === 201) {
                console.log("criado")

                this.setState({
                    TipoEquipamento : '',
                    IdSala : '',
                    marca : '',
                    numeroSerie : '',
                    numeroPatrimonio : '',
                    descricao : '' 
                })
            }
        })

        .catch(erro => console.log(erro))

  }

  ListarSalas = () => {
    fetch('http://localhost:5000/api/Salas')

    .then(resposta => resposta.json())

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
                    <Link className="linkstext" to="salas">Salas</Link>
                    <Link className="linkstext" to="Equipamentos">Equipamentos</Link>
                    <Link className="linkstext" to="cadastroSala">Cadastro sala</Link>
                    <Link className="linkstext borda" to="cadastroEquipamento">Cadastro equip.</Link>
                </div>
            </div>
        </div>
        <section class="content dis column ali jus">

            <div class="contentTitulo">
                <div class="tituloPagina">
                    <p>Cadastro de equipamentos</p>
                </div>
            </div>

            <form onSubmit={this.CadastrarEquipamento} class="areaCadastroEquip">
                <div class="contentCadastroEquipamento">
                    <div class="contentInput dis">
                        <div class="tituloCadastroBig">
                            <p> Marca </p>
                        </div>
                        <input class="inputsCadastros" name='marca' value={this.state.marca} type="text" placeholder="Digite o nome da marca" onChange={this.funcaoMudaState}/>
                    </div>
                    <div class="contentInput dis">
                        <div class="tituloCadastroBig">
                            <p> Sala </p>
                        </div>
                        <select name="IdSala" value={this.state.IdSala} class="selectCadastros" id="" onChange={this.funcaoMudaState}>
                            <option value="0">Selecione uma sala</option>
                            {
                                this.state.ListaSalas.map((salas) => {
                                    return(
                                    <option value={salas.idSala}>{salas.nome}</option>
                                    )
                                })
                            }
                            
                        </select>
                    </div>

                    <div class="contentInput dis">
                        <div class="tituloCadastroBig">
                            <p> Tipo Equipamento </p>
                        </div>
                        <select name="TipoEquipamento" value={this.state.TipoEquipamento} class="selectCadastros" onChange={this.funcaoMudaState} >
                            <option value="0">Selecione um tipo de equipamento</option>
                            {
                                this.state.ListaTipoEquipamento.map((tipo) => {
                                    return(
                                        <option value = {tipo.idTipoEquipamento}>{tipo.nome}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    
                    <div class="contentInput dis">
                        <div class="tituloCadastroBig">
                            <p> Num. de série </p>
                        </div>
                        <input class="inputsCadastros" type="text" name='numeroSerie' value={this.state.numeroSerie} onChange={this.funcaoMudaState} placeholder="Digite o número de série" />
                    </div>
                    <div class="contentInput dis">
                        <div class="tituloCadastroBig">
                            <p> Num. de patrimônio </p>
                        </div>
                        <input class="inputsCadastros" name='numeroPatrimonio' value={this.state.numeroPatrimonio} type="text" placeholder="Digite o número de patrimônio" onChange={this.funcaoMudaState}/>
                    </div>
                    <div class="contentInput dis">
                        <div class="tituloCadastroBig">
                            <p> Situação </p>
                        </div>
                        <input class="inputsCadastros" name='situacao' value={this.state.situacao} type="text" placeholder="Inativo" readOnly onChange={this.funcaoMudaState}/>
                    </div>
                    <div class="contentInput dis">
                        <div class="tituloCadastroBig">
                            <p> Descrição </p>
                        </div>
                        <input class="inputsCadastros" name='descricao' value={this.state.descricao} type="text" placeholder="Digite a descrição" onChange={this.funcaoMudaState}/>
                    </div>
                </div>
                
                <button type="submit"> Cadastrar </button>
            </form>
        </section>
    </section>
    )
  }

}
export default cadastroEquipamento;