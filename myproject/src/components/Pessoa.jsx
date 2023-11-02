import React from 'react'

function Pessoa({nome,idade,profissao,foto}){
  return (
    <div>
        <img src={foto} alt={nome} />
        <h2>Nome:{nome}</h2>
        <p>Idade:{idade}</p>
        <p>Profissao:{profissao}</p>
    </div>
  )
}

export default Pessoa

/*Ao inves de usar( function Pessoa(props)),
 eu instancio que nome vira nome e assim por diante,isso deixa o codigo mais limpo e simples. */