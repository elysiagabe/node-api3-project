import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageTitle = styled.h1`
    color: #2CC1E9;
    size: 40px;
    font-weight: 500;
    letter-spacing: 1px;
    padding-bottom: 28px;
    border-bottom: 1px solid #2CC1E9;
    text-transform: uppercase;
`

const Header = () => {
    return (
        <header>
            <Link to="/" style={{textDecoration: "none"}}>
                <PageTitle>User App</PageTitle>
            </Link>
        </header>
    )
}

export default Header