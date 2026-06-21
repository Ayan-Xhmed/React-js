import { useState } from 'react'


function App() {
  const [color, setColor] = useState('#212121')

  return (
    <>
     <div className='w-full h-screen duration-200' 
     style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center top-10 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white/70 backdrop-blur-sm rounded-4xl px-5 py-2 '>
          <button onClick={()=>setColor('red')} className='outline-none px-4 py-1 rounded-full text-white text-2xl shadow-lg' style={{background: 'red'}}>Red</button>
          <button onClick={()=>setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white text-2xl shadow-lg' style={{background: 'blue'}}>Blue</button>
          <button onClick={()=>setColor('green')} className='outline-none px-4 py-1 rounded-full text-white text-2xl shadow-lg' style={{background: 'green'}}>Green</button>
          <button onClick={()=>setColor('olive')} className='outline-none px-4 py-1 rounded-full text-white text-2xl shadow-lg' style={{background: 'olive'}}>Olive</button>
          <button onClick={()=>setColor('gray')} className='outline-none px-4 py-1 rounded-full text-white text-2xl shadow-lg' style={{background: 'gray'}}>Gray</button>
          <button onClick={()=>setColor('Black')} className='outline-none px-4 py-1 rounded-full text-white text-2xl shadow-lg' style={{background: 'Black'}}>Black</button>

          <button onClick={()=>setColor('yellow')} className='outline-none px-4 py-1 rounded-full text-black text-2xl shadow-lg' style={{background: 'yellow'}}>Yellow</button>
          <button onClick={()=>setColor('Pink')} className='outline-none px-4 py-1 rounded-full text-black text-2xl shadow-lg' style={{background: 'Pink'}}>Pink</button>
          <button onClick={()=>setColor('Lavender')} className='outline-none px-4 py-1 rounded-full text-black text-2xl shadow-lg' style={{background: 'Lavender'}}>Lavender</button>
          <button onClick={()=>setColor('orange')} className='outline-none px-4 py-1 rounded-full text-black text-2xl shadow-lg' style={{background: 'orange'}}>Orange</button>
          <button onClick={()=>setColor('purple')} className='outline-none px-4 py-1 rounded-full text-black text-2xl shadow-lg' style={{background: 'purple'}}>Purple</button>
          <button onClick={()=>setColor('white')} className='outline-none px-4 py-1 rounded-full text-black text-2xl shadow-lg' style={{background: 'White'}}>White</button>

        </div>
      </div>

     </div>
     
    </>
  )
}

export default App
