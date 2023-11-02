import React from 'react'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'
import Item from './components/Item'

 function App() {

const nome = "maria"

     return (
       <div className='App'>
           <Frase/>
        <Pessoa nome="rayane" idade="21" profissao="programadora" foto="https://i.pinimg.com/564x/4a/08/7b/4a087b25a11a310bcc66d4099b81d6c7.jpg" />
           <List/>
           <Item/>
    </div>
  ) 
}

export default App