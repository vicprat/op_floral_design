import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const CarouselWrapper = styled.div`
         .title {
           padding: 1rem;
         }
         img  {
           padding: 0 0 3rem 0; 
         }
         .description {
           padding: 2rem;
           p {
             margin: 3rem 1rem;
           }
           > ${StyledLink} {
             margin-top: 3rem;
             color: white;
             cursor: pointer;
             transition: 0.3s ease-in-out;
             &:hover {
               color: #23d997;
               text-decoration: underline;
             }
           }
         }
       `;
