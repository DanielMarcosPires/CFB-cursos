import { useState } from "react"

function App() {
  
  const [ligado,setLigado] = useState(false)

  const [cor, setColor] = useState('#f00')
  console.log(cor);
  const [corFonte, setColorFonte] = useState('#fff')
  const [tamanho, setTamanho] = useState(16)
  
  const button = {
    background:cor,
    color:corFonte,
    fontSize:`${tamanho}px`,
    cursor:`pointer`,
    display:`inline-block`,
    padding:`${8}px ${8}px`,
  }

  return (
    <>
      <div onClick={()=>setLigado(!ligado)} style={button}>
        Click me
      </div> 
      <ul style={{display:'flex',gap:`${1}em`}}>
        <li>
          <h2>Fundo</h2>
          <input onChange={(e)=>{setColor(e.target.value)}} type="color"/>
        </li>
        <li>
          <h2>Cor da Fonte</h2>
          <input onChange={(e)=>{setColorFonte(e.target.value)}} type="color"/>
        </li>
        <li>
          <h2>Tamanho da Fonte</h2>
          <input
            value={tamanho > 60 ? 60 : tamanho && tamanho < 16 ? 16 : tamanho}
            min={16} max={60}
            onChange={(e)=>{setTamanho(e.target.value)}}
            type="number"
          />
            <p>16 a 60</p>
        </li>
      </ul>
    </>
  )
}

export default App
