


import React, { useState } from 'react'
import Pulse from 'react-reveal/Pulse';

import '../styles.css'

export const Card = ( {imagen} ) => {

  const [imageState, setImageState] = useState(false);

  const onFocusImage = () => {
   
    setImageState(true);
  }

  const onMouseOut = () =>{
    setImageState(false);
  }

  return (

    <div className='card'>
      {
        imageState
       
        ?<Pulse>
            <img 
              onMouseEnter={ onFocusImage }
              onMouseLeave={ onMouseOut }
              className='card-img' src={ imagen } alt="" />
          </Pulse>
        :
        <img 
              onMouseEnter={ onFocusImage }
              onMouseLeave={ onMouseOut }
              className='card-img' src={ imagen } alt="" />
      }
      
    </div>
  )
}
