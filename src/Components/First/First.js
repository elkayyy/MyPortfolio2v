import React, { useState } from 'react';
import './First.css';

const First = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container">

      <div
        className={`shape1 ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
      >
        <div className="my-info">
          <h1>Hello and Welcome!</h1>
          <h2>My name is <span className='my-name'>Lazaros Kogioumtzidis</span></h2>
          <h2>I am a Front End Developer</h2>
          
        </div>
      </div>
    </div>
  );
};

export default First;