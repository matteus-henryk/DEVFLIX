import React from 'react';
import styled from 'styled-components'
import Menu from './componentes/Menu';
import BannerMain from './componentes/BannerMain';
import dadosIniciais from './data/dados_iniciais.json';
import Carousel from './componentes/Carousel';
import Footer from './componentes/Footer'


const AppWrapper = styled.div`
  background: var(--grayDark);

  padding-top: 94px;

  @media(max-width: 800px){
    padding-top: 40px;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Menu  />
      <BannerMain
      url={dadosIniciais.categorias[0].videos[0].url}
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}      
      videoDescription={"O que é Front-end? Trabalhando na área"}/>
      <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}/>

      <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias[1]}/>

      <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias[2]}/>

      <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias[3]}/>

      <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias[4]}/>

      <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias[5]}/>

      <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias[6]}/>
      <Footer 
      />
    </AppWrapper>

  );
}

export default App;
