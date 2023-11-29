

const tabelaIMC=()=>{
  return(
    <table border={1} style={{borderCollapse:'collapse'}}>
      <th></th>
    </table>
  )
}
function App() {

  return (
    <>
      peso:<input type="text" />
      peso:<input type="altura" />
      <p>Resultado: 23,25</p>
      <table>
        <thead>
          <td>Classificação</td>
          <td>IMC</td>
        </thead>
        <tr>Abaixo do peso</tr>
      </table>
    </>
  )
}

export default App
