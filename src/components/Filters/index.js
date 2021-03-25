import React from 'react';
import ProdcutContext from 'context/ProductContext';
import { CategoryFilterItem } from './CategoryFilterItem';
import { FiltersWrapper } from './styles';

export function Filters() {
  const { collections } = React.useContext(ProdcutContext);

  return (
    <FiltersWrapper>
      <strong>Categorias</strong>
      {collections.map(collection => (
        <CategoryFilterItem
          title={collection.title}
          key={collection.shopifyId}
          id={collection.shopifyId}
        />
      ))}
    </FiltersWrapper>
  );
}
