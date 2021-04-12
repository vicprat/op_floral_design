import React from 'react';
import { Layout, HomePageCollectionGrid, SEO } from 'components';
import ProductContext from '../context/ProductContext';

const CategoriesPage = () => {
  const { collections } = React.useContext(ProductContext);
  console.log(collections);

  return (
    <Layout>
      <SEO description="OP Floral Designer Home" title="Categorias" />
      <HomePageCollectionGrid
        collections={collections.filter(
          collection => collection.title !== 'Home'
        )}
      />
    </Layout>
  );
};

export default CategoriesPage;
