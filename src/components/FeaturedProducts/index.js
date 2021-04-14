import React from 'react';
import { ProductsGrid } from '../ProductsGrid';
import ProductContext from 'context/ProductContext';
import styled from 'styled-components';

export function FeaturedProducts() {
  const { collections } = React.useContext(ProductContext);

  const featuredCollection = collections.find(
    collection => collection.title === 'Selección del Florista'
  );

  return (
    <Wrapper>
      <h3 >Selección destacada del mes</h3 >
      <ProductsGrid products={featuredCollection.products} />
    </Wrapper>
  );
}

const Wrapper = styled.section``;