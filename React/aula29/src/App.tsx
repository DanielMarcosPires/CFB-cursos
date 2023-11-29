
interface Carros{
    categoria:string,
    preco:number,
    modelo:string
}

function App() {
  const carros:Array<Carros> = [
    { categoria: "c", preco: 11000, modelo: "Golf GTI" },
    { categoria: "c", preco: 11000, modelo: "Golf GTI" },
    { categoria: "c", preco: 11000, modelo: "Golf GTI" },
    { categoria: "c", preco: 11000, modelo: "Golf GTI" },
  ]

  return (
    <>
      <table>
        <tr>
          {
            carros.map((item)=><td>{item.categoria}| {item.preco} | {item.modelo}</td>)
          }   
        </tr>
      </table>
    </>
  )
}

export default App
