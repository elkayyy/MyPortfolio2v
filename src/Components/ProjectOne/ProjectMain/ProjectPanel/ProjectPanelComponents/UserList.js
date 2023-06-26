import React from 'react';
import './../ProjectPanel.css'

const UserList = ({ userList, logged}) => {
    return (
        <table className='tableData'>
        <thead className='thread-data'>
            <tr>
                <th>Username</th>
                <th>Password</th>
                <th>Registered</th>
                <th>Status</th> 
                
            </tr>
        </thead>
        <tbody>
            <tr style={{height:'5px'}}></tr>
            {userList.map((user, index) => (
                user.login !== logged ? (
                    <tr key={index}>
                        <td className='fade-in'>{user.login}</td>
                        <td className='fade-in'>{user.password}</td>
                        <td className='fade-in'>{user.dateString}</td>
                        <td className='fade-in'>Live!</td>
                    </tr>
                ) : null
            ))}
        </tbody>
    </table>
    )
};

export default UserList;