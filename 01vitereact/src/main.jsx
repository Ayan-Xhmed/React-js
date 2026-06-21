import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>My App !</h1> 
    </div>
  )
}

// const ReactElement ={
//     type : 'a',
//     props : {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: 'Click me to visit google'
// }

const anotherReactElement = (
  <a href="https://google.com"target='_blank'> Visit google</a>
)

const ReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click me to visit google'
)


createRoot(document.getElementById('root')).render( 
  <App />
)
