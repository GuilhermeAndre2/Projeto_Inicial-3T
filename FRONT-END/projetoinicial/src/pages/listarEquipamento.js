import { Component } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/img/Group 35.png'
import './style.css';


class Equipamentos extends Component{
    constructor(props){
      super(props);
      this.state = {
        ListaEquipamentos : [],
        listaNome : []
      }
    }
  
    ListaEquipamentos = () => {
      fetch('http://localhost:5000/api/Equipamentos')
  
      .then(resposta => resposta.json())
  
      .then(dados => this.setState({ListaEquipamentos : dados}))
  
      .catch((erro) => console.log(erro))
  
    }

    ListarNome = () => {
      fetch('http://localhost:5000/api/Usuarios')
  
      .then(resposta => resposta.json())
  
      .then(resposta => this.setState({listaNome : resposta}))
  
      .catch((erro) => console.log(erro))

      console.log(this.state.listaNome);
  }  
    
    componentDidMount(){
      this.ListaEquipamentos();
      this.ListarNome();
    }
  
    render(){
      return(
        <section class="corpo dis ">
        <div class="barra-lateral dis column ali">
            <div class="barraContent dis column ali spa">
                <img src={logoImg} alt="logo"/>

                    <h1>Ola, </h1>

                <div class="links dis column spa">
                    <Link className="linkstext" to="salas">Salas</Link>
                    <Link className="linkstext borda" to="Equipamentos">Equipamentos</Link>
                    <Link className="linkstext" to="cadastroSala">Cadastro sala</Link>
                    <Link className="linkstext" to="cadastroEquipamento">Cadastro equip.</Link>
                </div>
            </div>
        </div>
        <section class="content dis column ali jus">

            <div class="contentTitulo">
                <div class="tituloPagina">
                    <p>Cadastro de equipamentos</p>
                </div>
            </div>
          <div className="contentBoxListarEquip">
          {
            this.state.ListaEquipamentos.map((dados) => {
              return(
                <div className="boxListarEquip dis column">
                  <div className = "dis linhaListarEquip">
                    <p>Marca</p>
                    <p>{dados.marca}</p>
                  </div>
                  <div className = "dis linhaListarEquip">
                    <p>Sala</p>
                    <p>{dados.idSalaNavigation.nome}</p>
                  </div>
                  <div className = "dis linhaListarEquip">
                    <p>Tipo do equip.</p>
                    {/* <p>{dados.idTipoEquipamentoNavigation.nome}</p> */}
                    <p>{dados.idTipoEquipamento}</p>
                  </div>
                  <div className = "dis linhaListarEquip">
                    <p>Número de Série</p>
                    <p>{dados.numeroSerie}</p>
                  </div>
                  <div className="dis linhaListarEquip">
                    <p>Número do Patrimônio</p>
                    <p>{dados.numeroPatrimonio}</p>
                  </div>
                  <div className="dis linhaListarEquip">
                    <p>Situção</p>
                    <p>{dados.situacao = true ? <p>Ativo</p> : <p>Inativo</p>}</p>
                  </div>
                  <div className="linhaListarEquip">
                    <p>Descrição:</p>
                    <p>{dados.descricao}</p>
                  </div>
                </div>
              )
            } )
          }
          </div>
            
        </section>
  </section>
      )
    }
  }
  
  export default Equipamentos;