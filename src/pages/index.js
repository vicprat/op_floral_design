import React from 'react';
import { Layout, FeaturedProducts, SEO } from 'components';
import ProductContext from '../context/ProductContext';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import {Carousel } from 'react-bootstrap';

import {LayoutWrapper} from "../components/Layout/styles";

const IndexPage = ({ data }) => {
  const { collections } = React.useContext(ProductContext);
  console.log(collections);

  return (
    <Layout>
      <SEO description="OP Floral Designer Home" title="Inicio" />
      <CarouselWrapper>        
            <Carousel>
              {data.homePhotos.edges.map(image => (
                <Carousel.Item key={image.node.id}>
                  <Img
                    fluid={image.node.childImageSharp.fluid}
                    alt={image.node.base.split('-').join(' ').split('.')[0]}
                  />                 
                </Carousel.Item>
              ))}
            </Carousel>
      </CarouselWrapper>
      {!!collections.find(
        collection => collection.title === 'Selección del Florista'
      ) && <FeaturedProducts />}
    </Layout>
  );
};

export default IndexPage;

const CarouselWrapper = styled(LayoutWrapper)`
    max-width: 100%;
    padding: 0;
`;

export const pageQuery = graphql`
  query {
    homePhotos: allFile(
      filter: {
        relativeDirectory: { eq: "home" }
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
      }
      sort: { fields: relativePath, order: ASC }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid(
              maxWidth: 1980
              maxHeight: 1020
              fit: COVER
              cropFocus: CENTER
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;