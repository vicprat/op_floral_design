import React from 'react';
import { ProducstGridWrapper } from './styles';
import { ProductTile } from '../ProductTile';

export function ProductsGrid({ products }) {
  return (
    <ProducstGridWrapper>
      {products.map(product => (
        <ProductTile
          imageFluid={product.images[0].localFile.childImageSharp.fluid}
          key={product.shopifyId}
          title={product.title}
          minPrice={product.priceRange.minVariantPrice.amount}
          handle={product.handle}
        />
      ))}
    </ProducstGridWrapper>
  );
}
