import styled, { css } from 'styled-components';

const fullWidthStyles = ({ fullWidth }) => {
  if (fullWidth) {
    return css`
      display: block;
      width: 100%;
    `;
  }
};

export const Button = styled.button`
         display: block;
         border-radius: 10px;
         margin: 5px 10px;
         height: 44px;
         line-height: 40px;
         font-size: 1.2rem;
         font-weight: 300;
         font-family: 'Oswald', sans-serif;
         text-transform: uppercase;
         text-decoration: none;
         color: #333;
         background: none;
         border: 1px solid #ccc;
         letter-spacing: 2px;
         text-align: center;
         position: relative;
         transition: 0.2s cubic-bezier(0.07, 0.47, 0.84, 0.72);
         white-space: nowrap;
         ${fullWidthStyles}
         &:after {
                   border-radius: 10px;
           position: absolute;
           content: '';
           top: 0;
           left: 0;
           width: 0;
           height: 100%;
           background: #23d997;
           z-index: -1;
           transition: 0.3s cubic-bezier(0.07, 0.47, 0.84, 0.72);
         }
         &:hover {
           color: white;
           border: 1px solid #23d997;
         }
         &:hover:after {
           width: 100%;
         }
       `;
