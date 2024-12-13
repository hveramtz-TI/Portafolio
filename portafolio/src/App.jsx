import { useState } from 'react'
import './App.css'
import Proyectos from './components/proyectos/proyectos'
import Box from '@mui/material/Box'
import QuienSoy from './components/quienSoy/quienSoy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box 
      className='App' 
      display="block" 
      justifyContent="center" 
      alignItems="center"
    >
      <div className='quienSoy'>
        <QuienSoy />
      </div>
      <div className='proyectos'>
        <Proyectos />
      </div>
    </Box>
  )
}

export default App