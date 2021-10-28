import React, { useEffect } from "react";
// Components
import Header from "./components/Header/index3";
import Banner from "./components/Banner/index";
import Stories from "./components/Stories/index";

import { GlobalStyle } from "./GlobalStyle";

function IsHistoria() {
  let datos = function () {
    const username = document.cookie.split('; ').find(row => row.startsWith('user=')).split('=')[1];
    const username1 = document.getElementById("username").innerHTML = username;
  }
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    datos();
  });
  return (
    <>
      <Header />
      <GlobalStyle />
    </>
  );
}

export default IsHistoria;
