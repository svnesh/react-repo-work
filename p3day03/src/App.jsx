import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import LoginPage from './pages/LoginPage'
import AboutPage from './pages/AboutPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route index path='/login' element={<LoginPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Route>
    </Routes>
  )
}

export default App
