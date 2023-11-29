
export default function CaixaDeTexto({legenda,descricao,tipo}) {
  return (
    <figcaption>
        <legend>{legenda}</legend>
        <label htmlFor={descricao}>{descricao}</label>
        <input type={tipo} id={descricao} placeholder={descricao} />
    </figcaption>
  )
}
