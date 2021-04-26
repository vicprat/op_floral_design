import React from 'react';
import { ShippingForm, SEO, Layout } from 'components';

const ShippingPage = () => {
  return (
    <>
      <Layout>
        <SEO description="OP Floral Designer" title="Shipping Form" />
        <ShippingForm />
      </Layout>
    </>
  );
};

export default ShippingPage;
