import React from 'react'
import './FloorAnimation.css'


const FloorAnimation = ({variable}) => {
    return (
        <div className='container-shape3'>
                <div className='shape3'
               
                style={{
                    animation: `slide-in ${variable}s forwards`,
                    width: '100%',
                    height: '15vmin',
                    background: 'linear-gradient(to bottom, rgba(73, 28, 156, 0.123), rgba(164, 4, 238, 0.055))',
                    borderLeft: '1px solid rgba(167, 231, 236)',
                    marginTop: '1%',
                    clipPath: 'polygon(6% 14%, 77% 9%, 83% 42%, 7% 50%)',
                  }}
                >    
                </div>
                    
        </div>

    )
}

export default FloorAnimation