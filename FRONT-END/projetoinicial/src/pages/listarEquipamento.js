import { Component } from 'react';


class Equipamentos extends Component{
    constructor(props){
      super(props);
      this.state = {
        ListaEquipamentos : []
      }
    }
  
    ListaEquipamentos = () => {
      fetch('http://localhost:5000/api/Equipamentos')
  
      .then(resposta => resposta.json())
  
      //.then(resposta => console.log(this.state.l))
  
      .then(dados => this.setState({ListaEquipamentos : dados}))
  
      .catch((erro) => console.log(erro))
  
    }
    
    componentDidMount(){
      this.ListaEquipamentos();
    }
  
    render(){
      return(
        <section>
            {
              this.state.ListaEquipamentos.map((dados) => {
                return(
                  <div>
                      <p>{dados.idTipoEquipamento}</p>
                      <p>{dados.idSala}</p>
                      <p>{dados.situacao}</p>
                      <p>{dados.marca}</p>
                      <p>{dados.numeroSerie}</p>
                      <p>{dados.numeroPatrimonio}</p>
                      <p>{dados.descricao}</p>
                  </div>
                )
              } )
            }
        </section>
      )
    }
  }
  
  export default Equipamentos;