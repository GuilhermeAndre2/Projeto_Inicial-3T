import './style.css';
import { Component } from 'react';


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

    //.then(resposta => console.log(this.state.l))

    .then(dados => this.setState({ListaSalas : dados}))

    .catch((erro) => console.log(erro))

  }
  
  componentDidMount(){
    this.ListarSalas();
  }

  render(){
    return(
      <section>
          {
            this.state.ListaSalas.map((dados) => {
              return(
                <div>
                    <p>{dados.nome}</p>
                    <p>{dados.andar}</p>
                    <p>{dados.metragem}</p>
                </div>
              )
            } )
          }
      </section>
    )
  }
}

export default salas;
