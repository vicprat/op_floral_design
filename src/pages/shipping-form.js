import React from 'react';
import { ShippingForm, SEO, Layout } from 'components';
import styled from 'styled-components';

const ShippingPage = () => {
  return (
    <>
      <Layout>
        <SEO description="OP Floral Designer" title="Shipping Form" />
        <Wrapper>
        <h2>¡Queremos brindate la mejor atención posible!</h2>
        <p>
          
          Por favor introduce la siguiente información para así poder enviarte
   
                los articulos que compraste en la fecha y lugar que desees.
        
        </p>
        <ShippingForm />
        <h6>Vívelo con flores</h6>
        </Wrapper>
      </Layout>
    </>
  );
};

export default ShippingPage;

const Wrapper = styled.div`
  text-align: center;
  h2{
      font-weight: lighter;
  }
  p {
    padding: 3rem;
  }
  h6 {
    padding-top: 2rem;
    font-weight: 400;
  }
`;