import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'
import ProductsApi from './pages/ProductsApi'
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<ProductsApi />}  />
        <Route path='/about' element={<About />}  />
      </Route>
    </Routes>
  )
}

export default App
