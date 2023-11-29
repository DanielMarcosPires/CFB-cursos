import { Routes, BrowserRouter, Route} from 'react-router-dom'
import Layout from './Components/Layout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Layout/>}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
