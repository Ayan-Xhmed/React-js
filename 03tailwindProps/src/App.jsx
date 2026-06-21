import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card1 from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1 className='bg-green-300 p-8 rounded-b-4xl'>Tailwind Test</h1>
     <h1 className='bg-amber-950 text-black p-4'>Tailwind Test</h1> */}

     < Card1 userName="Ayan"/>
     
     

    
    {/* <div className=" w-72 flex flex-col rounded-xl glass  min-h-72 mt-3 ">
      <div>
        <img
          src="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g"
          alt="test"
          width="300"
          height="300"
          className="rounded-t-xl w-full"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl ">
        <div className="flex justify-between">
          <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
          <h1 className="font-bold font-RubikBold">Price</h1>
        </div>
        <div className="flex  justify-between font-mono">
          <p>#345</p>
          <p>0.01</p>
        </div>
      </div>
    </div> */}

     {/* <div class="flex flex-col items-center gap-6 p-7 md:flex-row m rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/11886674/pexels-photo-11886674.jpeg " />
  </div>
  <div class="flex items-center md:items-start">
    <span class="text-2xl font-medium">Class Warfare</span>
    <br />
    <span class="font-medium text-sky-500">The Anti-Patterns</span>
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
    </div> */}

    </>
  )
}

export default App
