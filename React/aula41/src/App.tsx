import { Component } from 'react'

export default class App extends Component {
 
  carros(){
    fetch("http://localhost:5173/index.json")
      .then(response => response.json)
      .then(list => console.log())
  }
 
  render() {
    return (
      <>
        {this.carros()}
      </>
    )
  }
}
