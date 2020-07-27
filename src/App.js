import React from 'react';
import Menu from './componentes/Menu';
import BannerMain from './componentes/BannerMain';
import dadosIniciais from './data/dados_iniciais.json';
import Carousel from './componentes/Carousel';
import Footer from './componentes/Footer'


function App() {
  return (
    <div style={{background: "#141414" }}>
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
      <Footer 
      />
    </div>

  );
}

export default App;
