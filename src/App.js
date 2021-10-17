import React from 'react';
// Components
import Header from './components/Header';
import Banner from './components/Banner';
import Stories from './components/Stories';
// Styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <div className="App">
    <Header />
    <Banner />
    <Stories />
    <GlobalStyle />
    </div>
  );
}

export default App;
