import React, { Component, Hooks } from 'react';
import ReactDOM from 'react-dom';

class Checkbox extends React.Component {
  constructor() {
    super();
    this.state = {
        	items: []
    }
  }

printList = () => {
    console.log("ok")
}

adicionar = (text) => {
  let vet = this.state.items
  vet.push({ text: text, done: false })
  //this.setState({items: vet})
  vet = []

}
//  	{ text: "text", done: false }
  render() {

    return (
      <div>
        <h2>I am a Checkbox! text: {this.props.text}</h2>
        <input type="button" onClick={this.printList} value="click"/>
        <input type="button" onClick={this.printList} value="click"/>
      </div>
    )
  }
}
//faz o export pra ser usado em outra classe
export default Checkbox;

//ReactDOM.render(<Checkbox text="arroz"/>, document.getElementById('checkbox'));
