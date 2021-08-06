import './style.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/img/Group 35.png'


class salas extends Component{
  constructor(props){
    super(props);
    this.state = {
      ListaSalas : []
    }
  }

  ListarSalas = () => {
    fetch('http://localhost:5000/api/Salas')

    .then(resposta => resposta.json())

    .then(dados => this.setState({ListaSalas : dados}))

    .catch((erro) => console.log(erro))

  }
  
  componentDidMount(){
    this.ListarSalas();
  }

  render(){
    return(
        <section class="corpo dis ">
        <div class="barra-lateral dis column ali">
            <div class="barraContent dis column ali spa">
                <img src={logoImg} alt="logo"/>

                    <h1>Ola, Gabriel</h1>

                <div class="links dis column spa">
                    <Link className="linkstext borda" to="salas">Salas</Link>
                    <Link className="linkstext" to="Equipamentos">Equipamentos</Link>
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
          <div className="contentBoxListar">
          {
            this.state.ListaSalas.map((dados) => {
              return(
                <div className="boxListarSalas dis column ali">
                   <p className="tituloSala">{dados.nome}</p>
                  <div className = "dis linhaListar">
                    <p>Andar</p>
                    <p>{dados.andar}</p>
                  </div>
                  <div className="dis linhaListar">
                    <p>Metragem</p>
                    <p>{dados.metragem}</p>
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

export default salas;
