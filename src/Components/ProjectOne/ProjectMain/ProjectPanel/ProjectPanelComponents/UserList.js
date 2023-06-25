import React from 'react';
import './../ProjectPanel.css'

const UserList = ({ userList, logged}) => {
    return (
        <table className='tableData'>
        <thead>
            <tr>
                <th style={{ textAlign: 'start' }}>{userList.map((user, index) => (
                    user.login !== logged ? (
                        <li className='fade-in' key={index}>Username: {user.login}</li>
                    ) : null
                ))}</th>
                <th style={{ textAlign: 'start' }}>{userList.map((user, index) => (
                    user.login !== logged ? (
                        <li className='fade-in' key={index}>Password: {user.password}</li>
                    ) : null
                ))}</th>
                <th style={{ textAlign: 'start' }}>{userList.map((user, index) => (
                    user.login !== logged ? (
                        <li className='fade-in' key={index}>Date: {user.dateString}</li>
                    ) : null
                ))}</th>
                <th style={{ textAlign: 'start' }}>{userList.map((user, index) => (
                    user.login !== logged ? (
                        <li className='fade-in'> Status : Live!</li>
                    ) : null
                ))}</th>



            </tr>
        </thead>

    </table>
    )
};

export default UserList;