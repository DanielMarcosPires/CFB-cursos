import { useState } from "react"

function Carros(params) {
  const carros = [
    {Categoria: "Esporte", preco:2000, modelo:"Golf"},
    {Categoria: "Esporte", preco:2000, modelo:"Golf"},
    {Categoria: "Esporte", preco:2000, modelo:"Golf"}
  ]
  let listaCarros = carros.map((item,i)=>
    <li key={`Carro${i}`}>{item} - {i}</li>
  )
  return (
    <>
      
    </>
  )
}
function App() {
  
  

  
  
  return (
    <>
      <Carros />
    </>
  )
}

export default App
