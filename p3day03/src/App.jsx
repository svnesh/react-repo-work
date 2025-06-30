import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import LoginPage from './pages/LoginPage'
import AboutPage from './pages/AboutPage'
import ProductList from './pages/ProductList'
import './App.css'
import HomePage from './pages/HomePage'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route index path='/login' element={<LoginPage />} />
      <Route path='/' element={ <ProtectedRoute><MainLayout /></ProtectedRoute> }>
        <Route index path='/home' element={<HomePage />} />
        <Route index path='/product' element={<ProductList />} />
        <Route path='/about' element={<AboutPage />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
