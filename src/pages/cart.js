import React from 'react';
import { Layout, CartContents, SEO } from 'components';

const CartPage = () => {
  return (
    <Layout>
      <SEO description="OP Floral Designer Cart" title="Carrito" />
      <CartContents />
    </Layout>
  );
};

export default CartPage;
