import CaixaDeTexto from "./CaixaDeTexto";
import "./css/style.css"
export default function Formulario() {
  return (
    <form>
      <CaixaDeTexto
        legenda="Info:"
        tipo=""
        descricao={"Nome:"}
      />
      <CaixaDeTexto
        legenda="Descrição"
        tipo=""
        descricao={"Nome:"}
      />
    </form>
  )
}
