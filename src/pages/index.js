import React from 'react';
import {
  Layout,
  FeaturedProducts,
  SEO,
  HomeBanner,
  CollabsGrid,
} from 'components';
import ProductContext from '../context/ProductContext';

const IndexPage = () => {

  const { collections } = React.useContext(ProductContext);
  console.log(collections);

  return (
    <>
      <Layout>
        <SEO description="OP Floral Designer Home" title="Inicio" />
        <HomeBanner />
        <CollabsGrid />
        {!!collections.find(
          collection => collection.title === 'Selección del Florista'
        ) && <FeaturedProducts />}
      </Layout>
    </>
  );
};

export default IndexPage;

