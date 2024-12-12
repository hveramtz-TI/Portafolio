import { useState } from 'react'
import './App.css'
import Proyectos from './components/proyectos/proyectos'
import Box from '@mui/material/Box'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box 
      className='App' 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh"
    >
      <div className='proyectos'></div>
      <Proyectos />
    </Box>
  )
}

export default App