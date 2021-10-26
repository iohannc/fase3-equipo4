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
export const Columnas = styled.div`
  button {
    margin: 0.5rem;
    color: #fff;
  }
  .button2 {
    font-weight: bold;
    color: #fff;
  }
`;

export const H2 = styled.div`
text-align: center;
h2 {
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 1rem;
    margin:0.5rem;
    font-weight: bold;
  },
p {
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 0.8rem;
  },
a{
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 0.8rem; 
    :hover{
        color: var(--fontRedEmphasis);
    },
    h3 {
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    color: #E41212;
     font-size: 1rem;
}
h4 {
    font-family: 'Roboto', sans-serif;
    color: white;
    font-weight: bold;
     font-size: 0.7rem;
}
`;
export const H3 = styled.div`
  text-align: center;
  margin-top: 0.5rem;
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 0.8rem;
  h3 {
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    color: #e41212;
    font-size: 1rem;
  }
  h2 {
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    color: white;
    font-size: 1rem;
  }
  p {
    font-weight: normal;
    font-family: "Roboto", sans-serif;
    color: white;
    font-size: 1rem;
  }
`;
export const Bloque = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    p {
      margin-left: 1em;
    }
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`;
export const Limit = styled.div`
  max-height: 10px;
`;
