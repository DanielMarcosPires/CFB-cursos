import { useState } from "react"


function App() {
  
  return (
    <>
     <label>Digite seu Nome:</label>
     <input type="text" name="fnome" />
     <p>Nome digitando:</p>
     <label>Selecione um carro</label>
     <select value={carro}>
      <option value={"HRV"}>HRV</option>
      <option value={"Golf"}>Golf</option>
      <option value={"Cruze"}>Cruze</option>
      <option value={"Argo"}>Argo</option>
     </select>
    </>
  )
}

export default App
