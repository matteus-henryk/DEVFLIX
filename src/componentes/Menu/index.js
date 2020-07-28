import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imagens/Logo.png';
import {LogoImg, MenuWrapper} from './style.js'
import Button from '../Button';

function Menu() {
    return (
        <MenuWrapper>
            <Link to="/">               
                <LogoImg  src={Logo} alt="DevFlix Logo" />               
            </Link>

            <Button as={Link}  to="/cadastro/video">
                Novo vídeo
            </Button>
        </MenuWrapper>
    );
}

export default Menu;