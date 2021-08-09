import './style.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/img/Group 35.png'
// import lixo from '../assets/img/trash-solid.svg'
import axios from 'axios';


class salas extends Component{
  constructor(props){
    super(props);
    this.state = {
      ListaSalas : [],
      idSalaSelecionado : 0,
      andar : '',
      nome : '',
      metragem : '',
      listaSalasEquip : []
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

  buscarPeloId = async (user) => {

    await this.setState({idSalaSelecionado : user.idSala})
    console.log(this.state.idSalaSelecionado)

    if(this.state.idSalaSelecionado !== 0){
      this.abreModal2();
      this.buscarSala();
    }

    
  }

  listarSalasEquip = () => {
    fetch('http://localhost:5000/api/Equipamentos/Salas&Equipamentos/'+ this.state.idSalaSelecionado)

    .then(dados => this.setState({listaSalasEquip : dados}))

    .catch(erro => console.log(erro)) 

    console.log(this.state.listaSalasEquip)
  }

  buscarSala = () => {
    axios('http://localhost:5000/api/Salas/' + this.state.idSalaSelecionado)
    
    .then(dados => this.setState ({
      nome : dados.nome
    }))

    .then(dados => console.log(dados))

    .catch(erro => console.log(erro))
  }

  excluir = async ()=>{
    await axios.delete('http://localhost:5000/api/Salas/'+ this.state.idSalaSelecionado)

    .catch(erro => console.log(erro))

    this.ListarSalas();
  }

  CadastrarSala = async (event) => {
    event.preventDefault();

    await fetch('http://localhost:5000/api/salas', {

    method : 'POST',

    body : JSON.stringify({
      andar : this.state.andar + 'º', 
      nome : this.state.nome, 
      metragem : this.state.metragem + ' m²'
    }),

    headers : {
      "Content-Type" : "application/json"
      }
    })

    .then(resposta => {
        if(resposta.status === 201) 
        {
          this.setState({
              andar : '',
              nome : '',
              metragem : ''
          })
        }
    })

    this.ListarSalas();
  } 

  funcaoMudaState = (campo) => {
    this.setState({[campo.target.name] : campo.target.value})
  }

  abreModal () {
    const modal = document.getElementById('modal')
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e)=> {
      if(e.target.id === "modal" || e.target.id === "fechar"){
        modal.classList.remove('mostrar')
      }
    })
  }

  abreModal2 = async () => {
    const modal = await document.getElementById('modal2')

    if(modal){
      modal.classList.add('mostrar')
      modal.addEventListener('click', (e)=> {
        if(e.target.id === "modal2" || e.target.id === "fechar"){
          modal.classList.remove('mostrar')
        }
      })
    }
  }

  render(){
    return(
        <section class="corpo dis">
        <div class="barra-lateral dis column ali">
            <div class="barraContent dis column ali spa">
                <img src={logoImg} alt="logo"/>

                    <h1>Ola, Gabriel</h1>

                <div class="links dis column spa">
                    <Link className="linkstext borda" to="salas">Salas</Link>
                    <Link className="linkstext" to="Equipamentos">Equipamentos</Link>
                </div>
            </div>
        </div>
        <section class="content dis column">
        <div className="contentBotaoCadastrar">
            <button onClick={this.abreModal}>
              <p>+ Cadastrar nova sala</p>
            </button>
          </div>
          <div className="contentBoxListar">
          {
            this.state.ListaSalas.map((dados) => {
              return(
                <div className="boxListarSalas dis column ali">
                    <p>{dados.nome}</p>
                    {/* <button className="buttonLixeira" onClick ={()=> this.buscarPeloId(dados)}><img src={lixo} className="lixeira"/></button> */}
                  <div className = "dis linhaListar">
                    <p>Andar</p>
                    <p>{dados.andar}</p>
                  </div>
                  <div className="dis linhaListar">
                    <p>Metragem</p>
                    <p>{dados.metragem}</p>
                  </div>
                  <div className="contentDetalhes" onClick={()=> this.buscarPeloId(dados)}>
                      <p>+Ver detalhes</p>
                    </div>
                </div>
              )
            } )
          }
          </div>
            
        </section>

          <section className="modalContent" id="modal">
            <div class="areaCadastro">
                  <form onSubmit={this.CadastrarSala} className = "containerCadastro">
                    <div class="contentCadastro">
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
                              <option value="5">5º andar</option>
                          </select>
                      </div>
                      <div class="contentInput dis">
                          <div class="tituloCadastro">
                              <p> Metragem </p>
                          </div>
                          <input class="inputsCadastros" type="text" name='metragem' value={this.state.metragem} onChange={this.funcaoMudaState} placeholder="Digite a metragem (ex: 10x10)"/>
                      </div>
                    </div>
                      <div className="botaoCadastroContent dis">
                        <button className="buttonGeral" id= "fechar" type='submit'> Cadastrar </button>
                        <div className="buttonGeral" id="fechar"> Cancelar </div>
                      </div>

                  </form>
              </div>
          </section>

          <section className="modalContent" id="modal2">
            <div className="areaCadastro">
              <div className="contentModalDetalhes">
                <p>{this.state.nome}</p>
              </div>
            </div>
          </section>
    </section>
    )
  }
}

export default salas;
