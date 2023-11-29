import  { useEffect, useState } from 'react'
import Calculadora from './Components/Calculadora'
import './reset.css'


export default function App() {

  const [valorTela, setValorTela] = useState('')
  const [resultado, setResultado] = useState(0)
  const [acumulador, setAcumulador] = useState(0)
  const [operacao, setOperacao] = useState(false)

 
    function valores(valor:any){
      let valoresSelecionado = String(valor)
      return setValorTela(valorTela+valoresSelecionado)
    }

    function operador(operador:string){
      if(
        valorTela == '+'||valorTela == '-'
        ||valorTela == '/'||valorTela == '*'
        ){
      }else{
        return setValorTela(valorTela+operador)
      }
    }

    return (
      <Calculadora Tela={valorTela}>
        <Calculadora.Controles>
          <li onClick={()=>{operador('+')}}>+</li>
          <li onClick={()=>{operador('/')}}>/</li>
          <li onClick={()=>{operador('*')}}>*</li>
          <li onClick={()=>{valores(1)}}>1</li>
          <li onClick={()=>{valores(2)}}>2</li>
          <li onClick={()=>{valores(3)}}>3</li>
          <li onClick={()=>{valores(4)}}>4</li>
          <li onClick={()=>{valores(5)}}>5</li>
          <li onClick={()=>{valores(6)}}>6</li>
          <li onClick={()=>{valores(7)}}>7</li>
          <li onClick={()=>{valores(8)}}>8</li>
          <li onClick={()=>{valores(9)}}>9</li>
          <li></li>
          <li onClick={()=>{valores(0)}}>0</li>
          <li>=</li>
        </Calculadora.Controles>
      </Calculadora>
    )
}
