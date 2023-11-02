import React from 'react'
import PropTypes from 'prop-types'
 function Item({marca, ano_lancamento}) {
  return (
    <>
      <li>
        {marca} - {ano_lancamento} 
        </li>   
       </>
  )
}

Item.PropTypes = {
 marca: PropTypes.string.isRequired, /* Esse isRequired é para caso eu mande a tag -EX: {<marca/>}- ele me da aviso, pra ser obrigatorio para a aplicação*/
ano_lancamento: PropTypes.number
}

Idem.DefaultProps ={
    marca: 'faltou a marca',
    ano_lancamento: 0,
}
export default Item