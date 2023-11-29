import React from 'react'



export default function IMC({altura,peso}) {
  return (
    <>
      <label htmlFor="">
        Peso
      </label>
      <input onChange={(e)=>peso(e.target.value)} type="number" />
      <label htmlFor="">
        Altura
      </label>
      <input onChange={(e)=>altura(e.target.value)} type="number" />
      <button>Enviar</button>
    </>
  )
}
