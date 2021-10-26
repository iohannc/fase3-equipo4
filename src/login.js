import React from "react";
// Components
import Header from "./components/Header/index2";
import Banner from "./components/Banner/index2";

import { GlobalStyle } from "./GlobalStyle";

function login() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <GlobalStyle />
    </div>
  );
}

export default login;
