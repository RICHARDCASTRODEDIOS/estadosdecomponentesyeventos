import React from 'react'

const Input = ({setVisible}) => {

  return (
<div className='cajainput'>
    <div className='input'>
        <input type="text" placeholder='nombre'/>
    </div>
    <div className='input'>
        <input type="password" placeholder='password' onChange={(e) => e.target.value === "252525"?setVisible(false):setVisible(true)}/>
    </div>
</div>
  )
}

export default Input