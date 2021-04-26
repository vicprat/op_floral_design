import styled from 'styled-components';

export const FooterWrapper = styled.div`
         margin: 5% 0 0 0;
         bottom: 0;
         width: 100%;
         background-color: transparent;
         p {
           font-weight: 400;
           font-size: 1.2rem;
           padding: 1rem;
         }
         h5 {
           text-decoration: none;
           color: #7c7c7c;
           &:hover {
             color: #23d997;
             text-decoration: none;
           }
         }
       `;
export const Title = styled.div`
  font-size: 1.2rem;
  color: #23d997;
  border-bottom: solid 2px #ccc;
  padding-top: 1rem;
`;
export const Icon = styled.div`
  width: 250px;
  cursor: pointer;
  &:hover {
    color: #23d997;
  }
`;

export const Contact = styled.div`
  display: flex;
  justify-content: justified;
  align-items: center;
`;
