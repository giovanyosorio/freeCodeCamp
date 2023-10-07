import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Testimonio  from "./components/Testimonio";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio/> 
      </div>

   
      </div>
  )
}

export default App
