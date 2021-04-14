import React from 'react';
import { Layout, FeaturedProducts, SEO, StyledLink} from 'components';
import ProductContext from '../context/ProductContext';
import {Carousel } from 'react-bootstrap';

import slide1 from "../images/home/banner1.png"
import slide2 from "../images/home/banner2.png"
import slide3 from "../images/home/banner3.png"

const IndexPage = () => {

  const { collections } = React.useContext(ProductContext);
  console.log(collections);

  return (
    <Layout>
      <SEO description="OP Floral Designer Home" title="Inicio" />
       
<Carousel>
<Carousel.Item>
  <img src={slide1} alt="this is the first silde"/>
  <Carousel.Caption>
  <h1>Hola soy el titulo</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nihil.</p>
  </Carousel.Caption>
</Carousel.Item>  
<Carousel.Item>
<img src={slide2} alt="this is the second silde"/>
<Carousel.Caption>
  <h1>Hola soy el </h1><h6>titulo2</h6>
  <p>Lorem iStyledLinksum dolor sit amet consectetur adipisicing elit. Obcaecati, nihil.</p>
  <StyledLink>¡Conoce Más!</StyledLink>
  </Carousel.Caption>
</Carousel.Item>  
<Carousel.Item>
<img src={slide3} alt="this is the thrid silde"/>
<Carousel.Caption>
  <h1>Hola soy el titulo3</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nihil.</p>
  </Carousel.Caption>
</Carousel.Item>  
</ Carousel>

      {!!collections.find(
        collection => collection.title === 'Selección del Florista'
      ) && <FeaturedProducts />}
    </Layout>
  );
};

export default IndexPage;

