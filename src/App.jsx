import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
