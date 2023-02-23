import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Submenu from './components/Submenu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </div>
  )
}

export default App
