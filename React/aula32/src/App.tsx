import { useState } from 'react'
import IMC from './Components/IMC'
import Tabela from './Components/Tabela'
import Resultado from './Components/Resultado';

function App() {
  const [altura, setAltura] = useState(1);
  const [peso, setPeso] = useState(1);

  

  const resultado = (peso / (altura * altura)).toFixed(2);

  
    
  return (
    <>
      <IMC altura={setAltura} peso={setPeso} />
      <Resultado resultado={resultado} />
      <Tabela />
    </>
  )
}

export default App
