import ResultBusq from "./resultBusq";
import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
// import SearchForm from '../SearchForm/index';
import Header from "../Header/index4";
// import SearchForm from "../SearchForm";
import Banner from "../Banner/index3";
import { GlobalStyle } from "../../GlobalStyle";


const Resultados = (props) => {
  let historia = useHistory();
  let busq = historia.location.pathname.split("/")[2];
  console.log("SearchCategory--> busq-->", busq);
  let datos = function () {
    let username = document.cookie.split('; ').find(row => row.startsWith('user='))
    if (username) {
      username = username.split('=')[1];
    } else {
      username = ""
    }
    document.getElementById("username").innerHTML = "  " + username;
  }
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    datos();
  });
  return (
    <div className="App">
      <div className="is-10">
        <Header />
        <Banner origen=" " />
        <ResultBusq />
        <GlobalStyle />
      </div>
    </div>
  );
};
export default Resultados;
