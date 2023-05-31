import React, { useEffect, useState } from 'react';
import { readFromDatabase } from '../../../../config/LoginScripts';
import { writeToDatabase, deleteUserFromDatabase } from '../../../../config/LoginScripts';
import './ProjectPanel.css';

const ProjectPanel = ({ logged, onLogout }) => {
    const [userList, setUserList] = useState([]);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');


    useEffect(() => {

        const fetchUserList = async () => {
            try {
                const users = await readFromDatabase();
                setUserList(Object.values(users));
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserList();
    }, [userList]);

    const handleCheckCredentials = () => {
        writeToDatabase(login, password)
        setLogin('');
        setPassword('');

    };

    const handleDeletion = () => {
        for (const user of userList) {
            if (user.login === userId) {
                deleteUserFromDatabase(user);
                setUserId('');
                break;

            }
        }
    };

    return (
        <div className='project-panel-main'>
            <div className='project-panel-opened'>
                <div className='container-1'>
                    <div className='user-list'>
                        <span>Users</span>
                        <ul>
                            {userList.map((user, index) => (
                                user.login !== logged ? (
                                    <li key={index}>{user.login}</li>
                                ) : null
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='container-2'>
                    <span>Welcome to the main Panel </span>
                    <span>This small project is to show some basic CRUD operations using Firebase as a database. Real-time database is
                        used to achieve that. The authentication method is a custom one and not one of the given options of firebase.
                    </span>

                    <div className='db-write-del'>

                        <div className='write'><span className='del-write'>Add a user in DB</span>

                            <div className='login-db'>
                                <label className='write-label'>Username</label>
                                <input
                                    type='text'
                                    onChange={(e) => setLogin(e.target.value)}
                                    value={login}

                                />
                            </div>
                            <div className='password-db'>
                                <label className='write-label'>Password</label>
                                <input
                                    type='password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </div>

                            <div className='main-button'>
                                <button className='main-btn' onClick={handleCheckCredentials}>
                                    Add
                                </button>

                            </div>

                        </div>

                        <div className='del'> <span className='del-write'>Delete a user</span>
                            <div className='remove-db'>
                                <label className='write-label'>Username</label>
                                <input
                                    type='text'
                                    onChange={(e) => setUserId(e.target.value)}
                                    value={userId}
                                />
                            </div>

                            <div className='main-button'>
                                <button className='main-btn' onClick={handleDeletion}>
                                    Delete
                                </button>

                            </div>


                        </div>

                    </div>




                </div>
                <div className='container-3'>
                    <div className='logged-in'>Logged: <span>{logged}</span></div>
                    <div className='logged-in-button'>
                        <button className='main-btn' onClick={onLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPanel;
