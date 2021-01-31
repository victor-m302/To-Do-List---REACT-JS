import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './Checkbox.js'
import Example from './Teste.js'
import Entrada from './Entrada.js'

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      campo: " ",
      list: [],
      check: false
    };
  }
  adicionaTarefa = () => {
    console.log("rodando");
    return Example()
  }

  pegarValorInput = () => {
      let input = document.getElementById('entrada').value
      //console.log(input);

      return input
  }

  //adicionar no vetor
  addVetor= () => {
    let itemList = this.state.list
    let item = this.pegarValorInput()
    itemList.push(item)
    this.setState( { list: itemList } )
    this.setState( { key: this.key+1 } )

  }
  imprimeEmLista = () => {
    this.addVetor()
    for(let i=0; i < this.state.list.length; i++){
      console.log(this.state.list[i]+" ");
    }
  }



render() {

  return (
    <div>
    <h1>Lista de Compras </h1>
    <h2>Fazer uma lista de compras que pega o valor do input, bota no vetor e imprime o valor do vetor numa lista</h2>
    <input type="text" id="entrada"/>
    <button type="button" onClick={this.imprimeEmLista} >Criar Tarefa</button>
    <button type="button" >Tarefa Completa</button>

    <Checkbox text="ok" />
    <ul>
      {this.state.list.map(elem => {
      return <li key={Math.random().toString()} >  {elem} </li>
      })}
    </ul>

    </div>
  );
}



}

export default ToDoList;
