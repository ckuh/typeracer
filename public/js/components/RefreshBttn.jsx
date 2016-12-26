import React from 'react'

const RefreshBttn = () => {
  const handleClick = () => {
    console.log('click')
    window.location.reload()
  }

  return (
    <button style={{float: 'right',
      height: '53px',
      width: '53px',
      border: '0',
      textAlign: 'center',
      padding: '0',
      margin: '0',
      backgroundColor: 'transparent'
    }}
      onClick={handleClick}>
      <img src='../../img/refresh.png'
        style={{height: '53px',
          width: '53px'}} />
    </button>
  )
}

export default RefreshBttn
