


import React from 'react'

import '../styles.css'

export const Card = ( {imagen} ) => {
  return (
    <div className='card'>
      <img className='card-img' src={ imagen } alt="" />
    </div>
  )
}
