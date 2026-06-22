import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState('')

  //useRef is used to create a reference to the password input field. This allows us to access the input field and copy the generated password to the clipboard when the user clicks the "Copy" button.
  const passwordRef = useRef(null) 

  // useCall is used to memoize the function and prevent it from being recreated on every render.
  const passwordGenerator = useCallback(()=>{ 
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(numberAllowed) {
      characters += '0123456789'
    }
    if(charAllowed) {
      characters += '!@#$%^&*()_+'
    }
    let password = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      password += characters.charAt(randomIndex)
    }
    setPassword(password)
  } , [length, numberAllowed, charAllowed]) 
  
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange({length: 0}, {length: password.length});
    window.navigator.clipboard.writeText(password)
  },[password])

  //useEffect is used to call the passwordGenerator function whenever the length, numberAllowed, charAllowed or passwordGenerator function changes. This ensures that the password is updated whenever any of these dependencies change.
  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <h1 className='text-4xl text-center text-black'>Password Genrater</h1>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-500 text-orange-500 '>
        <h2 className='text-white text-center'>Password Generator</h2>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-2 px-5 text-black bg-white'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='bg-blue-500 text-white px-5 py-2'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className=' flex item-centergap-x-1'>
            <input type="range"
            min={4}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>
          <div className=' flex item-center gap-x-1 '>
            <input type="checkbox"
            checked={numberAllowed}
            onChange={(e)=>{setNumberAllowed(e.target.checked)}}
            />
            <label>Numbers</label>
          </div>
          <div className=''>
            <input type="checkbox"
            checked={charAllowed}
            onChange={(e)=>{setCharAllowed(e.target.checked)}}
            />
            <label>Characters</label> 
          </div>
        </div>
        
      </div>
      
 
    </>
  )
}

export default App
