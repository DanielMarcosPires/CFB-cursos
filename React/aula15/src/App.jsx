import { useState } from "react"

function CaixaDeTexto({tipo,nome,evt}) {
  
  return(
    <>
    <label>{nome}</label>
    <input type={tipo} onChange={evt} />
    </>
  )
}

function App() {
  const [form, setForm]=useState(
    {nome:'',curso:'',ano:''})
  return (
    <>
      <CaixaDeTexto tipo={tipo} nome={"nome"} evt={
        (e)=>{
          setForm({nome:e.target.value})
        }} />
      <CaixaDeTexto tipo={tipo} nome={"curso"} evt={
        (e)=>{
          setForm({curso:e.target.value})
        }} />
      <CaixaDeTexto tipo={tipo} nome={"ano"} evt={
        (e)=>{
          setForm({ano:e.target.value})
        }} />
    </>
  )
}

export default App
