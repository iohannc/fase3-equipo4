import React from "react";
// Components
import Header from "./components/Header/index";
import Banner from "./components/Banner/index";
import Stories from "./components/Stories/index";

import { GlobalStyle } from "./GlobalStyle";

function init() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Stories />
      <GlobalStyle />
    </div>
  );
}

export default init;
