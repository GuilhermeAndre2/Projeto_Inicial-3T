import { Component } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/img/Group 35.png'
import './style.css';
import axios from 'axios'

const dadosIniciais = {
        TipoEquipamento : '',
        IdSala : '',
        marca : '',
        situacao: 0,
        numeroSerie : '',
        numeroPatrimonio : '',
        descricao : ''
}

class Equipamentos extends Component{
    constructor(props){
      super(props);
      this.state = {
        ListaSalas : [],
        ListaTipoEquipamento : [],
        ListaEquipamentos : [],
        listaNome : [], 
        idEquipamentoSelecionado : 0,
        TipoEquipamento : '',
        IdSala : '',
        marca : '',
        situacao : 0,
        numeroSerie : '',
        numeroPatrimonio : '',
        descricao : '',
        data : dadosIniciais
      }
    }
  
    ListaEquipamentos = async () => {
      await fetch('http://localhost:5000/api/Equipamentos')
  
      .then(resposta => resposta.json())
  
      .then(dados => this.setState({ListaEquipamentos : dados}))
  
      .catch((erro) => console.log(erro))
  
    }
    
    ListarSalas = () => {
      fetch('http://localhost:5000/api/Salas')

      .then(resposta => resposta.json())

      .then(dados => this.setState({ListaSalas : dados}))

      .catch((erro) => console.log(erro))

    }

    buscarEquipamentoId=()=>{

      fetch(`http://localhost:5000/api/Equipamentos/${this.state.idEquipamentoSelecionado}`)

      .then((resposta) => resposta.json())

      .then((data) => {
          if (data.hasOwnProperty("erro")) {
              this.setState({data: dadosIniciais});
              alert('Usuario não encontrado');
          } else {
              this.setState({data});
          }
      })

      .catch(erro => console.log(erro))

  }

    ListaTipoEquipamentos = () => {
      fetch('http://localhost:5000/api/TipoEquipamento')

      .then(resposta => resposta.json())

      .then(dados => this.setState({ListaTipoEquipamento : dados}))

      .catch((erro) => console.log(erro))

    }

    componentDidMount(){
      this.ListaEquipamentos();
      this.ListarSalas();
      this.ListaTipoEquipamentos();
    }

    CadastrarEquipamento = async (event) => {

      event.preventDefault();

      await axios.post('http://localhost:5000/api/Equipamentos', {
            idTipoEquipamento : this.state.TipoEquipamento,
            idSala : this.state.IdSala, 
            situacao : parseInt(this.state.situacao), 
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

      this.ListaEquipamentos();

    }

    funcaoMudaState = (campo) => {
      this.setState({[campo.target.name] : campo.target.value})
    }

    atualizaPeloId = (event) => {

      event.preventDefault();

      axios.put('http://localhost:5000/api/Equipamentos/'+ this.state.idEquipamentoSelecionado, {
        marca : this.state.marca,
        idSala : this.state.IdSala, 
        situacao : parseInt(this.state.situacao),
        numeroSerie : this.state.numeroSerie, 
        numeroPatrimonio : this.state.numeroPatrimonio, 
        descricao : this.state.descricao
      })

      .then(resposta => {
        if(resposta.status === 201) {
            console.log("criado")

            this.setState({
                IdSala : '',
                numeroSerie : '',
                numeroPatrimonio : '',
                descricao : '' 
            })
        }
    })

    .catch(erro => console.log(erro))

    this.ListaEquipamentos();

    }

    buscarPeloId = async (user) => {

      await this.setState({idEquipamentoSelecionado : user.idEquipamento})
      await this.buscarEquipamentoId();
      this.abreModal2();
    }

    EditarPeloId = async (user) => {

      await this.setState({idEquipamentoSelecionado : user.idEquipamento})
      await this.buscarEquipamentoId();
      this.abreModal3();
    }

    IdExcluir = async (user) => {

      await this.setState({idEquipamentoSelecionado : user.idEquipamento})
      this.excluir();
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

    abreModal3 = async () => {
      const modal = await document.getElementById('modal3')
  
      if(modal){
        modal.classList.add('mostrar')
        modal.addEventListener('click', (e)=> {
          if(e.target.id === "modal3" || e.target.id === "fechar"){
            modal.classList.remove('mostrar')
          }
        })
      }
    }

    excluir = async ()=>{
      await axios.delete('http://localhost:5000/api/Equipamentos/'+ this.state.idEquipamentoSelecionado)

      .catch(erro => console.log(erro))

      this.ListaEquipamentos();
    }

    deslogar () {
      localStorage.removeItem('token-login')
    }
  
    render(){

      return(
        <section class="corpo dis ">
        <div class="barra-lateral dis column ali spa">
            <div class="barraContent dis column ali spa">
                <img src={logoImg} alt="logo"/>

                    <h1>Ola, Gabriel</h1>

                <div class="links dis column spa">
                    <Link className="linkstext" to="salas">Salas</Link>
                    <Link className="linkstext borda" to="Equipamentos">Equipamentos</Link>
                </div>
            </div>
            <Link className="teclaSair" onClick={this.deslogar} to="/">Sair</Link>
        </div>
        <section class="content dis column ali jus">
          <div className="contentBotaoCadastrar">
            <button onClick={this.abreModal}>
              <p>+ Cadastrar novo equipamento</p>
            </button>
          </div>
          <div className="ListaPrincipal">

              <table >
                  <thead>
                      <td>Marca</td>
                      <td>Sala</td>
                      <td>Tipo do Equipamento</td>
                      <td>Situação</td>
                  </thead>
                  
                  <tbody>
                      {
                          this.state.ListaEquipamentos.map((dados)=>{
                              return(
                                  <tr key={dados.idEquipamento}>
                                      <td className="its">{dados.marca}</td>
                                      <td className="its">{dados.idSalaNavigation.nome}</td> 
                                      <td className="its">{dados.idTipoEquipamentoNavigation.nome}</td>
                                      <td className="its">{dados.situacao ? <p>Ativo</p> : <p>Inativo</p>}</td>
                                      <td className="its"> <button className="buttonLixeira" onClick ={()=> {this.IdExcluir(dados)}} >Excluir</button></td>
                                      <td><p className="detalhes" onClick={()=> this.buscarPeloId(dados)}>+ Ver detalhes</p></td>
                                      <td><p className="detalhes" onClick={()=> this.EditarPeloId(dados)}>+ Editar</p></td>
                                  </tr>
                              )
                          })
                      }
                  </tbody>
              </table>
          </div>
        </section>
        
        <section className="modalContent" id="modal" >
           
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
                            <p> Nº de série </p>
                        </div>
                        <input class="inputsCadastros" type="text" name='numeroSerie' value={this.state.numeroSerie} onChange={this.funcaoMudaState} placeholder="Digite o número de série" />
                    </div>
                    <div class="contentInput dis">
                        <div class="tituloCadastroBig">
                            <p> Nº de patrimônio </p>
                        </div>
                        <input class="inputsCadastros" name='numeroPatrimonio' value={this.state.numeroPatrimonio} type="text" placeholder="Digite o número de patrimônio" onChange={this.funcaoMudaState}/>
                    </div>
                    <div class="contentInput dis">
                        <div class="tituloCadastroBig">
                            <p> Situação </p>
                        </div>
                        <select class="selectCadastros" name = 'situacao' value = {this.state.situacao} onChange = {this.funcaoMudaState}>
                          <option value="0">Inativo</option>
                        </select>
                    </div>
                    <div class="contentInput dis">
                        <div class="tituloCadastroBig">
                            <p> Descrição </p>
                        </div>
                        <input class="inputsCadastros" name='descricao' value={this.state.descricao} type="text" placeholder="Digite a descrição" onChange={this.funcaoMudaState}/>
                    </div>
                </div>
                  <div className="botaoCadastroContent dis">
                      <button className="buttonGeral" id="fechar" type='submit'> Cadastrar </button>
                      <div className="buttonGeral" id="fechar"> Cancelar </div>
                  </div>
            </form>
            </section>

            <section className="modalContent" id="modal2">
                <div className="boxListarEquip dis column">
                  <div className = "dis linhaListarEquip">
                    <p>Marca</p>
                    <p>{this.state.data.marca}</p>
                  </div>
                  <div className = "dis linhaListarEquip">
                    <p>Número de Série</p>
                    <p>{this.state.data.numeroSerie}</p>
                  </div>
                  <div className="dis linhaListarEquip">
                    <p>Número do Patrimônio</p>
                    <p>{this.state.data.numeroPatrimonio}</p>
                  </div>
                  <div className="dis linhaListarEquip">
                    <p>Situção</p>
                    <p>{this.state.data.situacao ? <p>Ativo</p> : <p>Inativo</p>}</p>
                  </div>
                  <div className="linhaListarEquip">
                    <p>Descrição:</p>
                    <p>{this.state.data.descricao}</p>
                  </div>
                  <div>
                    <button className="buttonFechar" id="fechar">Fechar</button>
                  </div>
                </div>
          </section>
          
            <section className="modalContent" id="modal3">
              <form onSubmit={this.atualizaPeloId} class="areaCadastroEquip">
                  <div class="contentAtualizaEquipamento">
                    <div class="contentInput dis">
                          <div class="tituloCadastroBig">
                              <p> Marca </p>
                          </div>
                          <input class="inputsCadastros" name='marca' value={this.state.marca} type="text" placeholder="Digite o novo nome da marca" onChange={this.funcaoMudaState}/>
                    </div>
                      <div class="contentInput dis">
                          <div class="tituloCadastroBig">
                              <p> Sala </p>
                          </div>
                          <select name="IdSala" value={this.state.IdSala} class="selectCadastros" id="" onChange={this.funcaoMudaState}>
                              <option value="0">Selecione uma nova sala</option>
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
                              <p> Nº de série </p>
                          </div>
                          <input class="inputsCadastros" type="text" name='numeroSerie' value={this.state.numeroSerie} onChange={this.funcaoMudaState} placeholder="Digite o novo número de série" />
                      </div>
                      <div class="contentInput dis">
                          <div class="tituloCadastroBig">
                              <p> Nº de patrimônio </p>
                          </div>
                          <input class="inputsCadastros" name='numeroPatrimonio' value={this.state.numeroPatrimonio} type="text" placeholder="Digite o novo número de patrimônio" onChange={this.funcaoMudaState}/>
                      </div>
                      <div class="contentInput dis">
                        <div class="tituloCadastroBig">
                            <p> Situação </p>
                        </div>
                        <select class="selectCadastros" name = 'situacao' value = {this.state.situacao} onChange = {this.funcaoMudaState}>
                          <option value="0">Inativo</option>
                          <option value="1">Ativo</option>
                        </select>
                      </div>
                      <div class="contentInput dis">
                          <div class="tituloCadastroBig">
                              <p>Descrição </p>
                          </div>
                          <input class="inputsCadastros" name='descricao' value={this.state.descricao} type="text" placeholder="Digite a nova descrição" onChange={this.funcaoMudaState}/>
                      </div>
                  </div>
                    <div className="botaoCadastroContent dis">
                        <button className="buttonGeral" id="fechar" type='submit'> Atualizar dados </button>
                        <div className="buttonGeral" id="fechar"> Cancelar </div>
                    </div>
              </form>
          </section>
      </section>
      )
    }
  }
  
  export default Equipamentos;