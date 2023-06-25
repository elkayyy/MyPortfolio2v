import React, { useEffect, useState } from 'react';
import { readFromDatabase } from '../../../../config/LoginScripts';
import { writeToDatabase, deleteUserFromDatabase } from '../../../../config/LoginScripts';
import './ProjectPanel.css';

const ProjectPanel = ({ logged, onLogout }) => {
    const [userList, setUserList] = useState([]);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');
    const [showDelete, setShowDelete] = useState(false);
    const [showAddUser, setShowAddUser] = useState(false);
    const [emptyInputError, setEmptyInputError] = useState(false);
    const [emptyInputErrorDel, setEmptyInputErrorDel] = useState(false);


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
        if (!login || !password) {
            setEmptyInputError(true);
            return;
          }
        writeToDatabase(login, password)
        setLogin('');
        setPassword('');
        setEmptyInputError(false);

    };

    const handleDeletion = () => {
        if (!userId) {
            setEmptyInputErrorDel(true);
            setUserId('');
            return;
        }

        for (const user of userList) {
            if (user.login === userId) {
                deleteUserFromDatabase(user);
                setUserId('');
                setEmptyInputErrorDel(false);
                break;
            }
        }
    };

    const toggleDelete = () => {
        setShowDelete(!showDelete);
        if (showDelete) {
            setUserId('');
            setEmptyInputErrorDel(false);
        }

    };

    const toggleAddUser = () => {
        setShowAddUser(!showAddUser);
       
        };

    return (
        <div className='project-panel-main'>
            <div className='project-panel-opened'>

                <div className='container-2'>


                    <span>Welcome to the main Panel </span>
                    <span>This small project is to show some basic CRUD operations using Firebase as a database. Real-time database is
                        used to achieve that. The authentication method is a custom one and not one of the given options of firebase.
                    </span>

                    <div className='db-write-del'>

                        <div>
                            <div className='write'>
                                <div className='login-db fade-in' style={{ display: showAddUser ? 'block' : 'none' }}>
                                    <input
                                        type='text'
                                        placeholder='username'
                                        onChange={(e) => setLogin(e.target.value)}
                                        value={login}
                                        style={{ textAlign: 'left' }}
                                    />
                                </div>
                                <div className='password-db fade-in' style={{ display: showAddUser ? 'block' : 'none' }}>

                                    <input
                                        type='password'
                                        placeholder='password'
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        style={{ textAlign: 'left' }}
                                    />
                                </div>
                                {emptyInputError && <div><span className="write-msg fade-in">Input cannot be empty. Please try again.</span></div>}
                                <div className='main-button'>
                                    {showAddUser && (
                                        <button className='main-btn fade-infade-in' onClick={handleCheckCredentials}>
                                            Confirm
                                        </button>
                                    )}
                                    <button className='main-btn fade-in' onClick={toggleAddUser}>
                                        {showAddUser ? 'Cancel' : 'Add'}
                                    </button>

                                </div>
                            </div>
                        </div>

                        <div className='main-button'>
                            {showDelete && (<div className='remove-db fade-in'>

                                <input
                                    type='text'
                                    onChange={(e) => setUserId(e.target.value)}
                                    value={userId}
                                    style={{ textAlign: 'left' }}
                                />
                            </div>)}
                            {emptyInputErrorDel && <div> <span className='del-msg fade-in '>Wrong Username</span></div>}
                            {showDelete && (
                                <button className='main-btn fade-in' onClick={handleDeletion}>
                                    Confirm
                                </button>

                            )}
                            <button className='main-btn fade-in' onClick={toggleDelete}>
                                {showDelete ? 'Cancel' : 'Delete'}
                            </button>


                        </div>

                    </div>

                </div>

                <div className='container-1'>
                    <div className='user-list'>
                        <span>User List</span>
                        <table className='tableData'>

                            <thead>
                                <tr>
                                    <th style={{ textAlign: 'start' }}>{userList.map((user, index) => (
                                        user.login !== logged ? (
                                            <li className='fade-in' key={index}>{user.login}</li>
                                        ) : null
                                    ))}</th>
                                    <th style={{ textAlign: 'start' }}>{userList.map((user, index) => (
                                        user.login !== logged ? (
                                            <li className='fade-in' key={index}>{user.password}</li>
                                        ) : null
                                    ))}</th>
                                    <th style={{ textAlign: 'start' }}>{userList.map((user, index) => (
                                        user.login !== logged ? (
                                            <li className='fade-in'> Live!</li>
                                        ) : null
                                    ))}</th>
                                </tr>
                            </thead>

                        </table>
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
