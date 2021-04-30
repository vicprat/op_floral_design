import styled from 'styled-components';
import { StyledLink } from '../StyledLink';
import { motion } from 'framer-motion';

export const CollectionTileWrapper = styled.div`
  height: 300px;
  max-height: 100vh;
  display: flex;
  position: relative;
  margin-bottom: 5px;
  > div {
    flex-grow: 1;
  }
`;
export const ColectionTileContent = styled(motion.div)`
         display: flex;
         color: white;
         flex-grow: 1;
         justify-content: center;
         align-items: center;
         position: absolute;
         width: 100%;
         height: 100%;
         text-decoration: none;
         background: rgba(0, 0, 0, 0.4);
         text-align: center;
         opacity: 0;
         transition: 0.5s ease;
         &:hover {
           opacity: 1;
         }
         > div {
           padding: 20px;

           ${StyledLink} {
             font-family: 'Poppins', sans-serif;
             padding: 5px 30px;
             margin-bottom: 5px;
             display: inline-block;
             text-decoration: none;
             color: #ddd;
             font-size: 1.5rem;
             letter-spacing: 00.3rem;
             font-weight: 200;
             background: ${props => (props.sale ? 'rgba(0,0,0, 0.3)' : 'none')};
             transition: all 0.5s;

             &:hover {
               color: white;
             }
           }
         }
       `;
export const Title = styled.div`
         font-family: 'Oswald', sans-serif;
         padding: 5px 10px;
         margin-bottom: 5px;
         display: inline-block;
         text-transform: uppercase;
         font-size: 5rem;
         letter-spacing: 00.5rem;
         font-weight: 200;
         text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
         background: ${props => (props.sale ? 'rgba(0,0,0, 0.3)' : 'none')};
       `;

export const Description = styled.div`
         font-size: 20px;
         margin: 20px;
         background: ${props => (props.sale ? 'rgba(0,0,0, 0.3)' : 'none')};
         padding: 10px;
       `;
