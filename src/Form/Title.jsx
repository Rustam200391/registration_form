import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group'

export const Title = () => {
    const [show,setShow] = useState()

  return (
    <div> 
        <h2 
            onClick={() => 
            setShow(!show)} 
        >
            Sign In
        </h2>
        {show ? 'The service':'Enjoy'}
    
        <CSSTransition 
        in={show} 
        timeout={1000}
        classNames='alert'
        unmountOnExit
        >
        <h3>Registration process after filling out the form...</h3>
        </CSSTransition>
    </div>
  )
}

