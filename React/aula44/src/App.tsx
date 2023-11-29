
export default function App() {
  const list = ["Daniel","Marcos"]
  return (
    <>
      {list.map((item,i)=><div key={`${item}${i}`}>{item}</div>)}
    </>
  )
}
