import styled from 'styled-components';

export const ImageGalleryWrapper = styled.section`
         > div:first-child {
           border: 1px solid black;
           width: 500px;
         }
         > div:last-child {
            width: 300px;
           margin-top: 5px;
           display: grid;
           grid-template-columns: repeat(2, 1fr);
           grid-gap: 5px;

           @media (min-width: 768px) {
             grid-template-columns: repeat(3, 1fr);
           }
           @media (min-width: 1024px) {
             grid-template-columns: repeat(4, 1fr);
           }
         }
       `;
