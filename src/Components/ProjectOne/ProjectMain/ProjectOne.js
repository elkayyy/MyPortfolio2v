import React, { useState } from 'react'
import './ProjectOne.css'

const ProjectOne = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [login, setLogin] = useState(''); // new state variable for login input
  const [password, setPassword] = useState(''); // new state variable for password input

  return (
    <div className='project-container-main'>
      <div className={`shape5 ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsHovered(true)}>
        <div className='project-main-login'>
          <div className='main-login'>
            <div className='login'>
              <label className='label'>Cyber In</label>
              <input type="text"  value={login} onChange={e => setLogin(e.target.value)} />

            </div>
            <div className='password'>
              <label className='label'>Password</label>
               <input type="password" name="name" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectOne
