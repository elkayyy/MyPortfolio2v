import React from 'react';
import { useState } from 'react';
import { writeToDatabase, deleteUserFromDatabase} from '../../../../../config/LoginScripts';
import '../ProjectPanel.css'

const WriteDelete = ({userList}) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');
    const [showDelete, setShowDelete] = useState(false);
    const [showAddUser, setShowAddUser] = useState(false);
    const [emptyInputError, setEmptyInputError] = useState(false);
    const [emptyInputErrorDel, setEmptyInputErrorDel] = useState(false);

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

        const userToDelete = userList.find(user => user.login === userId);
        if (userToDelete) {
            deleteUserFromDatabase(userToDelete);
            setUserId('');
            setEmptyInputErrorDel(false);
        } else {
            setEmptyInputErrorDel(true);
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
       
        <div className='db-write-del'>

            <div className='write-container'>
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
                    {emptyInputError && <div><span className="write-msg fade-in">Invalid User/Pass.</span></div>}
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

            <div className='delete-container'>
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
    )
};

export default WriteDelete;