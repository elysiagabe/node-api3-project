import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import UserCard from './UserCard';
import Axios from 'axios';

const PageTitle = styled.h2`
    color: #2CC1E9;
    font-size: 24px;
    font-weight: 500;
    margin: 50px 0 32px;
    letter-spacing: 1px;
`

const UserCard = styled.div`
    color: #1E4088;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    margin: 20px 0 20px;
    letter-spacing: 1.5px;
`

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
            <PageTitle>All users using User App:</PageTitle>
            {users.map(user => (
                <Link to={`/users/${user.id}`} style={{textDecoration: "none"}}>
                    <UserCard key={user.id}>
                        {user.name}
                    </UserCard>
                </Link>
            ))}
        </div>
    )
}

export default Users;