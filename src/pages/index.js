import React from 'react';
import { Layout, HomePageCollectionGrid, FeaturedProducts, SEO } from 'components';
import ProductContext from '../context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);
  console.log(collections);
  
  return (
    <Layout>
      <SEO description="OP Floral Designer Home" 
      title="Inicio"/>
<HomePageCollectionGrid collections={collections.filter(collection => collection.title !== "Home")} />
{!!collections.find(collection => collection.title === "Selección del Florista") &&
<FeaturedProducts />}
    </Layout>
  );
};

export default IndexPage;
