import { Component } from 'react'

interface CarrosTSX{
  id:number,
  Marca:string,
  modelo:string
}

export default class App extends Component {
 
  carros:CarrosTSX = [
    { id: 1, Marca: "Volksvagen", modelo: "HRV", },+
    { id: 2, Marca: "Fiat", modelo: "Uno" },+
    { id: 3, Marca: "Ford", modelo: "Fiesta", }
  ];
  render() {
    return (
      <>
        {this.carros.map((item, i)=>
         <div>({item.id}) {item.Marca} - {item.modelo}</div>)
        }
      </>
    )
  }
}
