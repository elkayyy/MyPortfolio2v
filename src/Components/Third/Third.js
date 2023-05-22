import React from 'react'
import './Third.css'
import { useState } from 'react'

const Third = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='container-shape3'>
             
              
                <div className={`shape3 ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={() => setIsHovered(true)}
                >
                  
                </div>
                <div className="my-info3"><span style={{color:'white'}}></span></div>
        </div>

    )
}

export default Third