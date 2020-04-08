import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserCard from './UserCard';
import Axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:5000/api/users/')
        .then(res => {
            console.log(res)
            setUsers(res.data);
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h2>This is where all the users will be listed.</h2>
            {users.map(user => (
                <Link to={`/users/${user.id}`}>
                <UserCard key={user.id} />
                </Link>
            ))}
        </div>
    )
}

export default Users;