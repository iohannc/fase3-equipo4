import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const GlobalStyle = createGlobalStyle`
:root {
    --fontRedEmphasis: #E41212;
    background-color: #000;
    
}
body {
    background-color: #000;
    height: 100vh;
}

`;
export const Columnas = styled.div``;
export const H2 = styled.div`
text-align: center;
h2 {
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 1rem;
  }
p {
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 0.8rem;
  }
a{
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 0.8rem; 
    :hover{
        color: var(--fontRedEmphasis);
    };
h3{
    font-family: 'Roboto', sans-serif;
    color: #E41212;
    font-size: 0.8rem;
}`;
