import React from 'react';
import { Carousel } from 'react-bootstrap';
import { CarouselWrapper } from './styles';
import slide1 from '../../images/home/carousel4.png';
import slide2 from '../../images/home/carousel5.png';
import slide3 from '../../images/home/carousel6.png';
import mainLogo from '../../images/logoOP.png';

export function HomeBanner() {
  return (
    <CarouselWrapper>
      <Carousel>
        <Carousel.Item>
          <img src={slide1} alt="this is the first silde" />
          
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide2} alt="this is the second silde" />
        
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide3} alt="this is the thrid silde" />
         
        </Carousel.Item>
      </Carousel>
    </CarouselWrapper>
  );
}
