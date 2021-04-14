import React from 'react';
import { Layout, FeaturedProducts, SEO } from 'components';
import ProductContext from '../context/ProductContext';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import {Carousel } from 'react-bootstrap';
import styled from "styled-components";

const IndexPage = ({ data }) => {

  const { collections } = React.useContext(ProductContext);
  console.log(collections);

  return (
    <Layout>
      <SEO description="OP Floral Designer Home" title="Inicio" />
      <Wrapper>
        <Carousel>
          {data.homePhotos.edges.map(image => (
            <Carousel.Item key={image.node.id}>
              <div className="imgwrapper">
              <Img
                fluid={image.node.childImageSharp.fluid}
                alt={image.node.base.split('-').join(' ').split('.')[0]}
              /> 
              </div>
              <div className="details">    
                <h1 >${title}</h1>               
                </div>            
            </Carousel.Item>
          ))}
        </Carousel>
        </Wrapper>
      {!!collections.find(
        collection => collection.title === 'Selección del Florista'
      ) && <FeaturedProducts />}
    </Layout>
  );
};

export default IndexPage;

const Wrapper = styled.div`
width:100%;
position:relative;

.details{
  color: white;
  position:absolute;
  top:50%;left:50%;
  -webkit-transform:translate(-50%,-50%);
  -moz-transform:translate(-50%,-50%);
  -ms-transform:translate(-50%,-50%)
  ;width:1110px!important;max-width:90%;
  z-index:1;
  @media (max-width:767px){
    h1{
      font-size: 1rem;
    }
  }
}
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