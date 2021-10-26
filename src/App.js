import React from "react";
// Components
import init from "./Init";
import login from "./login";
import Register from "./components/Register/index";
// Styles
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" render={init} />
        <Route exact path="/login" render={login} />
        <Route exact path="/register" render={Register} />
      </BrowserRouter>
    </>
  );
}

export default App;
