import React, {useState, useMemo} from 'react';
import {format} from 'date-fns';
import { AddingUsers } from './AddingUsers';

export default function ManageUsers({Users = []}){

    const [searchTerm, setSearchTerm] = useState('');
    const [formData, setFormData] = useState({

        id:"",
        name:"",
        surname:"",
        email:"",
        phoneNumber:""

    });

    const filterUsers = useMemo(() =>{

        if(!Array.isArray(Users)){
            console.error("Invalid Users data:", Users);
            return [];
        }

        const term =searchTerm.toLowerCase();
        return Users.filter ( user =>
            Object.values(user).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(term)
            )
        );
    })

    return(

        <div className="manage-users">
            <h2>User Management</h2>
            {filterUsers.length > 0 ? (
                <input 
                    type="text" 
                    placeholder="Search users..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style ={{
                        padding: '8px',
                        marginBottom: '10px',
                        width: '20%',
                        boxSizing: 'border-box'
                    }} />
            ) : null}
            <div className = "user-list">


                <table>

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>

                {Array.isArray(filterUsers) && filterUsers.length > 0 ? (
                filterUsers.map((user, index) => (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                    </tr>
                ))
                ) 
                :
                (
                    <tr>
                        <td colSpan={6}>No users found.</td>
                    </tr>
                )

                }

                </tbody>

            </table>

            </div>

            <div className='platform-analytics'>

            </div>
        </div>

 

    );
}