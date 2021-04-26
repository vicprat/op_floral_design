import styled from 'styled-components';

export const About = styled.div`
  display: grid;
  min-height: 90vh;
  padding: 5rem 4rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  grid-template-columns: repeat(2, 1fr);
`;
export const Description = styled.div`
                flex: 1;
                z-index: 2;
                padding: 0 2rem;
                h2 {
                  font-size: 1.5rem;
                  font-weight: lighter;
                }
                h6  {
                  font-size: 1.5rem;
                }
                @media (min-width: 400px) {
                  h2 {
                  font-size: 2rem;
                  font-weight: lighter;
                }
                h6  {
                  font-size: 2rem;
                }
           }
            `;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    object-fit: cover;
    width: 100%;
  }
`;
export const Hide = styled.div`
         overflow: hidden;
         padding: 2rem;
       `;
