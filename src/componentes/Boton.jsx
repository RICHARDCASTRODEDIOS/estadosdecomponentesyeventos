import React from 'react'

const Boton = ({visible}) => {
  return (
    <button disabled={visible} className="boton">
      Enviar
    </button>
  )
}

export default Boton