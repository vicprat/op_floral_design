import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const ProductTileWrapper = styled.div`
         border: 1px solid #ddd;
         display: flex;
         position: relative;
         border-radius: 5px;
         overflow: hidden;
         flex-direction: column;
         transition: 0.3s ease-in-out;
         &:hover {
          opacity: 80%;
          }
         > ${StyledLink} {
           font-family: 'Oswald', sans-serif;
           font-size: 1.5rem;
           text-decoration: none;
           display: block;
           text-align: center;
           font-weight: 400;
           color: black;
         }
       `;
export const Title = styled.div`
         width: 100%;
         position: absolute;
         font-size: 1.5rem;
         font-family: "Oswald", sans-serif;
         bottom: 10%;
         font-weight: normal;
         
         
       `;

export const Description = styled.div`
         color: #999;
         text-align: left;
         padding: 0 20px 0px 20px;
       `;

export const Price = styled.div`
 font-size: 1.2rem;
  width: 100%;
  position: absolute;
  font-family: "Oswald", sans-serif;
  bottom: 1%;
  font-weight: bold;
`;
