import React from "react";

import ResultBusq from "./resultBusq";
import SearchForm from "../SearchForm";
import Header from "../Header/index2";
import { GlobalStyle } from "../../GlobalStyle";
import {  Container, searchWrapper } from "./results.styles";


const Resultados = (props) => {
  return (
    <>
    <Header />
    <Container>
      <searchWrapper>
        <SearchForm />
      </searchWrapper>
      <ResultBusq />
    </Container>
    <GlobalStyle />
    </>
  )
}

export default Resultados;
