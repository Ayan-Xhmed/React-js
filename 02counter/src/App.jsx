import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // basic javascript counter
  // let counter = 15;
  // const addValue = () => {
  //   counter = counter + 1;
  //   console.log(counter);
  //   console.log(Math.random());
  // }
  // const removeValue = () => {
  //   counter = counter - 1;
  //   console.log(counter);
  //   console.log(Math.random());
  // }

  // react counter
  const [counter, setCounter] = useState(15);
  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1);
    }
    
    //console.log(counter);
  }
  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    } 
    //console.log(counter);
  }

  return (
    <>
     {/* basic javascript counter
     <h1>Hello My self Ayan</h1>
     <h2>counter Value : {counter} </h2>

     <button
     onClick={addValue}
     >Add Value {counter} </button>
      <br />
     <button
     onClick={removeValue}
     >remove Value {counter}</button> */}
     
     <h1>Hello My self Ayan</h1>
     <h2>counter Value : {counter} </h2>

     <button
     onClick={addValue}
     >Add Value {counter} </button>
      <br />
     <button
     onClick={removeValue}
     >remove Value {counter}</button>
    </>
  )
}

export default App
