import React from 'react';
import { ProductsGrid } from '../ProductsGrid';
import ProductContext from 'context/ProductContext';

export function FeaturedProducts() {
  const { collections } = React.useContext(ProductContext);

  const featuredCollection = collections.find(
    collection => collection.title === 'Selección del Florista'
  );

  return (
    <section>
      <h1>Featured Flowers</h1>
      <ProductsGrid products={featuredCollection.products} />
    </section>
  );
}
