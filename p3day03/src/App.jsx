import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import LoginPage from './pages/LoginPage'
import AboutPage from './pages/AboutPage'
import ProductList from './pages/ProductList'
import './App.css'
import HomePage from './pages/HomePage'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <Routes>
      <Route index path='/login' element={<LoginPage />} />
      <Route path='/' element={ <ProtectedRoute><MainLayout /></ProtectedRoute> }>
        <Route path='/home' element={<HomePage />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/about' element={<AboutPage />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App