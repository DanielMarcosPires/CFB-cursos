import axios from 'axios'
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    carros:[]
  }

  componentDidMount(): void {
    axios.get('https://cfbcursosapireactexemplo1.brcampos.repl.co')
    .then(res=>{
      const dadosCarros = res.data
      this.setState({carros:dadosCarros})      
    })
  }

  render() {
    return (
      <div>
        {this.getSnapshotBeforeUpdate.carros.map(carros=>
          <div key={carros.id}>{carros.marca - carros.modelo}</div>)}
      </div>
    )
  }
}
