import styled from 'styled-components';
import Button from '../Button';

export const LogoImg = styled.img`
    max-width: 168px;
    @media(max-width: 800px){
        max-width: 105px;
    }
`;

export const MenuWrapper = styled.nav`
    width: 100%;
    height: 94px;

    z-index: 100;

    position: fixed;
    top: 0;
    left:  0;
    
    padding-left: 5%;
    padding-right: 5%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--black);
    border-bottom: 2px solid var(--primary);
`;

export const Buttonlink = styled(Button)`
    border: 1px solid var(--white);
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
        &focus{
            opacity: 1;
        }
    }
`;