import React, { useState } from 'react';
import { checkCredentials } from '../../../config/LoginScripts';
import ProjectPanel from './ProjectPanel/ProjectPanel';
import './ProjectOne.css';

const ProjectOne = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const [loginFailKey, setLoginFailKey] = useState(0);

  const handleCheckCredentials = () => {

    checkCredentials(login, password)
      .then((res) => {
        setIsAuthenticated(res);
        setLoginFailed(!res);
        if (!res) {
          setLoginFailKey(prevKey => prevKey + 1); 
        }

      })
      .catch((error) => {
        console.error(error);
        setLoginFailed(!true);
      });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLogin('');
    setPassword('');
  };

  return (
    <>
      {isAuthenticated ? (
        <ProjectPanel logged={login} onLogout={handleLogout} />
      ) : (
        <div className='project-container-main'>
          <div
            className={`shape5 ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
          >
            <div className='project-main-login'>
              <div className='main-login'>
                <div className='login'>
                  <label className='label'>Login</label>
                  <input
                    type='text'
                    onChange={(e) => setLogin(e.target.value)}
                  />
                </div>
                <div className='password'>
                  <label className='label'>Password</label>
                  <input
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className='main-button'>
                  <button className='main-btn' onClick={handleCheckCredentials}>
                    Confirm
                  </button>
                  {loginFailed && <div key={loginFailKey} className='log-fail'>Login failed. Please try again.</div>}
                </div>


              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectOne;
