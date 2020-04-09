import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    color: #191919;
    border-top: 1px solid #2CC1E9;
    padding: 28px;
    margin-top: 60px;
`

const Footer = () => {
    return (
        <StyledFooter>
            &copy; 2020
        </StyledFooter>
    )
}

export default Footer;