import React from 'react';
import { LayoutWrapper } from './styles';
import { Header } from '../Header';
import { Footer } from '../Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
      <Footer />
    </>
  );
};

export { Layout };
