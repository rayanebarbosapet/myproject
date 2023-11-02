import React from 'react'
import HelloWorld from './components/HelloWorld'
 function App() {
     const name = 'rayane'
     const newName = name.toUpperCase() /*o nome ou a variavel que foi intanciada fica com letras maiusculas */
     
function sum (a,b) {
    return a+b
}

const url ="https://i.pinimg.com/564x/4a/08/7b/4a087b25a11a310bcc66d4099b81d6c7.jpg"

     return (
         
         <div className='App'>
        <h1>Olá React!</h1>
        <p>olá,{newName} </p> 
        <p>Soma: {sum(1,2)}</p>  {/* ele tambem interpreta o js */}
        <img src={url} alt="minha imagem " />
        <HelloWorld/>
    </div>
  ) 
}

export default App