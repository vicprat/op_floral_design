import React from 'react';
import { Carousel } from 'react-bootstrap';
import { CarouselWrapper } from './styles';
import slide1 from '../../images/home/banner1.png';
import slide2 from '../../images/home/banner2.png';
import slide3 from '../../images/home/banner3.png';
import mainLogo from '../../images/logoOP.png';

export function HomeBanner() {
  return (
    <CarouselWrapper>
      <Carousel>
        <Carousel.Item>
          <img src={slide1} alt="this is the first silde" />
          <Carousel.Caption>
           
            <div className="title">
            <h1>BIENVENIDO A <br/> <br/> </h1>
              
            <img src={mainLogo} alt="" />
              <h1>VÍVELO CON</h1>
              <h6>FLORES</h6>
            </div>
            <div className="description"></div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide2} alt="this is the second silde" />
          <Carousel.Caption>
            <div className="title">
              <h1>Celebra a mamá con un detalle</h1>
              <h6>Floral.</h6>
            </div>
            <div className="description">
              <p>
                Que éste 10 de mayo esa mujer tan especial reciba un regalo
                único.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide3} alt="this is the thrid silde" />
          <Carousel.Caption>
            <div className="title">
              <h1>Una flor florece para su propia</h1>
              <h6>alegría.</h6>
            </div>
            <div className="description">
              <p>-Oscar Wilde</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </CarouselWrapper>
  );
}
