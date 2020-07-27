import React from 'react';
import Logo from '../../assets/imagens/Logo.png';
import {LogoImg, MenuWrapper,Buttonlink} from './style.js'

function Menu() {
    return (
        <MenuWrapper>
            <a href="/">               
                <LogoImg  src={Logo} alt="DevFlix Logo" />               
            </a>

            <Buttonlink as="a"  href="/">
                Novo vídeo
            </Buttonlink>
        </MenuWrapper>
    );
}

export default Menu;