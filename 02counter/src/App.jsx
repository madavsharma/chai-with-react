import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5) 
 //let counter = 5

 const addValue = () => {
  
  //counter += 1
  if(counter < 20) setCounter(counter + 1)
  // console.log("clicked", counter);
 }
const removeValue = () => {
  if(counter > 0) setCounter(counter - 1)
}
 
  return (
    <>
      <h1> chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value {counter} </button>
      <br/>
      <button
      onClick={removeValue}
      > remove below {counter} </button>
      <p> footer: {counter} </p>
    </>
  )
}

export default App
