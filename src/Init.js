// import React from "react";
import React, { useEffect, useState } from "react";

// Components
import Header from "./components/Header/index";
import Banner from "./components/Banner/index";
import Stories from "./components/Stories/index";

import { GlobalStyle } from "./GlobalStyle";

// const function Init() {
const Init = () => {
  // const URL = "https://proyecto-equipo7.herokuapp.com/v1/usuarios/limite/20";
  // const [todos, setTodos] = useState([]);
  const [stories, setStories] = useState([]);
  // const [show, setShow] = React.useState(true);

  const getStories = async () => {
    const fetchedStories = await fetch(
      "https://proyecto-equipo7.herokuapp.com/v1/usuarios/limite/20"
    );
    return await fetchedStories.json();
  };

  useEffect(() => {
    getStories()
    .then(newStories => setStories(newStories))
    .catch(err => console.log(err));
  });

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetch(URL);
  //       const data = await response.json();
  //       setTodos(data);
  //     } catch(error) {
  //       console.error(error);
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <div className="App">
      <Header />
      <Banner />
      <Stories listHist={stories} />
      <GlobalStyle />
    </div>
  );
}

export default Init;