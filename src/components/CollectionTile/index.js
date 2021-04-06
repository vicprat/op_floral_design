import React from 'react';
import {
  CollectionTileWrapper,
  ColectionTileContent,
  Description,
} from './styles';
import BackgroundImage from 'gatsby-background-image';
import { StyledLink } from '../StyledLink';

export function CollectionTile({
  destination,
  description,
  title,
  backgroundImage,
  sale,
}) {
  return (
    <CollectionTileWrapper>
      <BackgroundImage fluid={backgroundImage} />
      <ColectionTileContent>
        <div>
          <StyledLink to={destination}>{title}</StyledLink>
          <Description sale={sale}>{description}</Description>
          
        </div>
      </ColectionTileContent>
    </CollectionTileWrapper>
  );
}
