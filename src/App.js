import React from 'react';
// Components
import Header from './components/Header';
import Banner from './components/Banner';
// Styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <div className="App">
    <Header />
    <Banner />
    <GlobalStyle />
    </div>
  );
}

export default App;
