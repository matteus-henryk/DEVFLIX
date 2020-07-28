import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/imagens/Logo.png';
import {LogoImg} from '../Menu/style.js'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <LogoImg  src={Logo} alt="DevFlix Logo" />               
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
