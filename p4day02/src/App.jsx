import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import LoginPage from './pages/LoginPage'
import ProductsPage from './pages/ProductsPage'
import AboutPage from './pages/AboutPage'
import { useAuth } from './context/AuthContext'

function App() {

  const {isLogin} = useAuth();

  return (
    <Routes>
      <Route path='/' index element={<LoginPage />} />
      <Route element={isLogin ? <MainLayout /> : <LoginPage />}>
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Route>
    </Routes>
  )
}

export default App
