import styled from 'styled-components';
import BackgroundImage from '../images/backgrounds/10.svg';

export const Grid = styled.section`
         background-image: url(${BackgroundImage});
         background-size: cover;
         display: grid;
         grid-template-columns: 1fr;
         grid-gap: 20px;
         margin-top: 20px;
         align-items: center;
         justify-content: center;
         text-align: center;
         @media (min-width: 768px) {
           grid-template-columns: 1fr 1fr;

           > div:first-child {
             order: 2;
           }
           > div:last-child {
             order: 1;
           }
         }
       `;

export const SelectWrapper = styled.div`
         margin-top: 5rem;
         > strong {
           display: block;
           margin-bottom: 8px;
         }
       `;

export const Price = styled.div`
         font-family: 'Oswald', sans-serif;
         margin: 40px 0;
        
         font-size: 2rem;;
       `;
