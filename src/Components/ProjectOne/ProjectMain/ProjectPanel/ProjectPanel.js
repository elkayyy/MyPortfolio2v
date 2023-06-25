import React, { useEffect, useState } from 'react';
import { readFromDatabase } from '../../../../config/LoginScripts';
import UserList from './ProjectPanelComponents/UserList'
import WriteDelete from './ProjectPanelComponents/WriteDelete';
import '../ProjectPanel/ProjectPanel.css'

const ProjectPanel = ({ logged, onLogout }) => {
    const [userList, setUserList] = useState([]);

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


    return (
        <div className='project-panel-main'>
            <div className='project-panel-opened'>

                <div className='container-2'>

                    <span>Welcome to the main Panel </span>
                    <span>This small project is to show some basic CRUD operations using Firebase as a database. Real-time database is
                        used to achieve that. The authentication method is a custom one and not one of the given options of firebase.
                    </span>
                    <WriteDelete userList={userList} />


                </div>

                <div className='container-1'>
                    <div className='user-list'>
                        <span>User List</span>
                        <UserList userList={userList} logged={logged} />
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
