import { graphql } from 'gatsby';

export const productField = graphql`
         fragment ShopifyProductFields on ShopifyProduct {
           shopifyId
           title
           description
           images {
             id
             localFile {
               childImageSharp {
                 fluid(maxWidth: 1980) {
                   ...GatsbyImageSharpFluid_withWebp
                 }
               }
             }
           }
         }
       `;
