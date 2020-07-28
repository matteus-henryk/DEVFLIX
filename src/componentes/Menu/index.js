import React from 'react';
import Logo from '../../assets/imagens/Logo.png';
import {LogoImg, MenuWrapper} from './style.js'
import Button from '../Button';

function Menu() {
    return (
        <MenuWrapper>
            <a href="/">               
                <LogoImg  src={Logo} alt="DevFlix Logo" />               
            </a>

            <Button as="a"  href="/">
                Novo vídeo
            </Button>
        </MenuWrapper>
    );
}

export default Menu;