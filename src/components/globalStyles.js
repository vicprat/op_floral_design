import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import BackgroundImage from '../images/backgrounds/B.svg';


export const GlobalStyle = createGlobalStyle`
  ${reset}
  select{
    height: 40px;
    font-size: 16px;
    background: none;
  }
  body{
    font-family: 'Poppins', sans-serif;
    line-height: 1.2;
   
    background-image: url(${BackgroundImage});
         background-repeat: no-repeat;
         background-size: cover;
  }
  strong{
    font-family: 'Oswald', sans-serif;
    font-weight: 200;
    font-size: 1.5rem;
  }
  h2,h3,h4,h5{
    margin: 20px 20px;
  }
  h1{
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    font-size: 3.5em;
    letter-spacing: .5rem;
    
  }
  
  h2{
    font-family: 'Poppins', smercmerans-serif;
    font-size: 3em;
  }
  h3{
    font-family: 'Poppins', sans-serif;
    font-size: 2em;
  }
  h4{
    font-size: 1.5em;
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    
  }
  h5{
    font-size: 1em;
  }
  h6{
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 3em;
    letter-spacing: .5rem;
    color:#23D997 ;
    font-weight: bold;
  
  }
  p{
    font-size: 1.3em;
  }
  ul{
    margin-left: 20px;
    >li{
      list-style: disc;
    }
  }
`;
