import styled from 'styled-components';

export const Input = styled.input`
         border: 1px solid #ccc;
         display: grid;
         font-size: 16px;
         font-family: 'Open Sans', sans-serif;
         border-radius: 0;
         height: 44px;
         width: 100%;
         padding: 5px 60px;
         margin: 5px 10px;
         box-sizing: border-box;
         min-width: 0;
         &:focus {
           border-color: black;
         }
       `;
