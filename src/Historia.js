import React from "react";
// Components
import Header from "./components/Header/index3";
import Banner from "./components/Banner/index";
import Stories from "./components/Stories/index";

import { GlobalStyle } from "./GlobalStyle";

function init() {
  return (
    <>
      <Header />
      <GlobalStyle />
    </>
  );
}

export default init;
