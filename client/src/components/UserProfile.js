import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const UserProfile = () => {
    const { id } = useParams();
    // console.log({params})
    const [user, setUser] = useState({});
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:5000/api/users/${id}`)
        .then(res => {
            setUser(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        Axios.get(`http://localhost:5000/api/users/${id}/posts`)
        .then(res => {
            setUserPosts(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>{user.name}</h1>
            <h3>Recent Acvitity</h3>
            {userPosts.map(post => (
                <div key={post.id}>
                    <p>{post.text}</p>
                </div>
            ))}
        </div>
    )
}

export default UserProfile;