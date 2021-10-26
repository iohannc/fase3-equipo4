import React from "react";
// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Stories from "./components/Stories";

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
