import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import styled from 'styled-components';

const ProfilePage = styled.div`
    background: #1E4088;
    width: 50%;
    padding: 30px;
    margin: 0 auto;
    border-radius: 2px;
`

const Name = styled.h2`
    color: #F8F7F8;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 10px;
`

const Metadata = styled.p`
    font-size: 11px;
    color: #F8F7F8;
    margin-bottom: 20px;
`

const Divider = styled.div`
    height: 2px;
    width: 60%;
    background-color: #2CC1E9;
    margin: 0 auto;
`

const Subtitle = styled.h3`
    margin-top: 40px;
    color: #F8F7F8;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1.5px;
`

const ActivityLog = styled.ul`
    list-style: none;
    padding-left: 0;
    text-align: left;
    width: 50%;
    margin: 0 auto;
    color: #F8F7F8;
    font-size: 12px;
`

const Post = styled.li`
    margin: 24px 0;
`

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
        <ProfilePage>
            <Name>{user.name}</Name>
            <Metadata>User ID: {user.id}</Metadata>
            <Divider></Divider>
            <Subtitle>All Posts by {user.name}</Subtitle>
            <ActivityLog>
                {userPosts.map(post => (
                    <Post key={post.id}>
                        {post.text}
                    </Post>
                ))}
            </ActivityLog>
        </ProfilePage>
    )
}

export default UserProfile;