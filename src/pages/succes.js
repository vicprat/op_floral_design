import React from 'react';
import { Layout, SEO } from 'components';
import styled from 'styled-components';

const SuccesPage = () => (
  <Layout>
    <SEO title="Pago Aprovado" />
    <Wrapper>
      <h1>¡Muchas Gracias!</h1>
      <p>Recibirás tu compra en la fecha y hora indicada.</p>
      <p>Pronto nos pondremos en contacto contigo.</p>
      <h6>CON FLORES ES MEJOR </h6>
    </Wrapper>
  </Layout>
);

export default SuccesPage;

const Wrapper = styled.div`
  text-align: center;
  h1,
  p {
    padding: 2rem 0;
  }
  h6 {
    font-weight: 400;
  }
`;
