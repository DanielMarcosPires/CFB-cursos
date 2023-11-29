import Dados from "./Components/Dados";

function App() {
  function bobo(){
    return "Função"
  }
  return (
    <>
      <Dados funcao={bobo()} />
    </>
  );
}

export default App;
