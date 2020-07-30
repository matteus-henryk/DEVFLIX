import styled from 'styled-components';

const Button = styled.button`
    border: 1px solid var(--white);
    background: var(--black);
    border-radius: 4px;
    color: var(--white);
    font-size: 16px;
    font-weight: bold;
    padding: 16px 14px;
    text-decoration: none;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .5;
    }
    @media(max-width: 800px) {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--primary);
        color: var(--white);
        text-align: center;
        border: 0;
        border-radius: 0;
        &:hover,
        &:focus{
            opacity: 0.8;
        }
    }

`;

export default Button;
