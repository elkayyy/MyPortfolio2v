import React from 'react'
import './AboutMe.css'
import { useState } from 'react';

const AboutMe = () => {

    const [isHovered, setIsHovered] = useState(false);
  
    return (

        <div className='container-shape2'>
            <div className={`shape2 ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
            >
                <div className="my-info"><span style={{fontFamily:'sans-serif'}}>By completing a bachelor's degree in CS, I have a strong foundation in programming,
                    algorithms, and software design. With a passion for creating visually appealing and user-friendly web interfaces,
                    I have focused my efforts on frontend development. <br/>
                    As a computer science student, I have gained a broad range of skills and knowledge, from programming languages,to algorithms and data structures,
                    computer architecture, database design and management, software engineering, web development, 
                    and more. While mastering these skills, I have also learned to prioritize performance and efficiency in my work. 
                    I understand the importance of optimizing code, minimizing resource usage, and designing systems that can handle 
                    large-scale data and user traffic. By balancing performance and aesthetics,
                    I am able to develop innovative solutions that not only look good but also operate smoothly and reliably.</span></div>
            </div>
        </div>
    )
}

export default AboutMe