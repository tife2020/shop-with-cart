import React from 'react'

function Button({children, ...props}) {
  return (
    <button {...props} className='bg-offYellow py-2 px-8 rounded-md text-lg hover:bg-yellow'>{children}</button>
  )
}

export default Button