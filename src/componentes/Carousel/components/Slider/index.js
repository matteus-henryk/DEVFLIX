/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  height: 197px;


  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 70px;
    height: 220px;
    transform: initial;
    
    &:before {
      font-size: 30px;
    }
    .slick-prev{
      margin-left: 0px;
      
    }
    .slick-next{
      margin-right: 0px;
    }
  }
  
  .slick-prev {
    left: -30px;
    background: #141414;
    box-shadow: 10px 0px 5px #141414,
                15px 0px 10px #141414,
                20px 0px 15px #141414,
                25px 0px 20px rgba(8, 8, 8, 0.6);
    border-radius: 5px;
  }
  .slick-next {
    right: 0px;
    background: #141414;
    box-shadow: -10px 0px 5px #141414,
                -15px 0px 10px #141414,
                -20px 0px 15px #141414,
                -25px 0px 20px rgba(8, 8, 8, 0.6);
    border-radius: 5px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: false,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 