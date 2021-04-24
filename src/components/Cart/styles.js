import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const CartWrapper = styled(StyledLink).attrs(() => ({
         to: '/cart',
       }))`
         padding: 1rem;
         display: flex;
         color: #555;
         text-decoration: none;
         transition: ease-in-out 0.3s;

         > svg {
           margin: auto;
         }

         > div:last-child {
           padding-left: 8px;
           margin: auto 0;
         }

         &:hover {
           text-decoration: underline;
           color: #aaa;
         }
       `;
