import React from 'react';
import { Layout, SEO, ContactForm } from 'components';
import styled from 'styled-components';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact OP Floral Design" />
    <Wrapper>
      <h1>¡Contáctanos!</h1>
      <p>
        Escríbenos si quieres cotizar algún evento, cotización especial o
        colaborar con nostros.
      </p>
      <p> ¡Esperamos saber de ti!</p>
      <ContactForm />
      <p>Pronto nos pondremos en contacto contigo.</p>
      <h1>Síguenos también en redes sociales.</h1>
      <h6>QUE NO NOS FALTEN LAS FLORES </h6>
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
    font-weight: 400;
  }
`;
