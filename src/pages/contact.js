import React from 'react';
import { Layout, SEO, ContactForm } from 'components';
import styled from 'styled-components';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact OP Floral Design" />
    <Wrapper>
      <h1>¡Contactanos!</h1>
      <p>Escribenos si quieres mas información o colaborar con nostros</p>
      <ContactForm />
      <p>Pronto nos pondremos en contacto contigo.</p>
      <h2>Siguenos también en redes sociales</h2>
      <h6>Vívelo con flores</h6>
    </Wrapper>
  </Layout>
);

export default ContactPage;

const Wrapper = styled.div`
  text-align: center;
  h1,
  p {
    padding: 3rem 0;
  }
  h2 {
    font-size: 2rem;
    padding: 1rem 0;
    font-weight: 300;
  }
  h6 {
    font-weight: 300;
  }
`;
