import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

// import SearchForm from '../SearchForm/index';
import Header from "../Header/index4";
// import SearchForm from "../SearchForm";
import Banner from "../Banner/index3";
import Stories from "../Stories/index";
import CatTitle from "../Title";
import Categories from "../Categories";
import { GlobalStyle } from "../../GlobalStyle";


const SearchCategory = (props) => {
  const history = useHistory();
  const categoria = history.location.pathname.split("/")[2];
  const [currentCategory, setCurrentCategory] = useState(categoria);

  // No eliminar este useEffect.
  // Es importante para rerenderizar el título de la categoría 
  // a la que se le haya dado click
  useEffect(() => {
      history.listen((location) => {
      setCurrentCategory(location.pathname.split("/")[2]);
      });
      return setCurrentCategory(history.location.pathname.split("/")[2]);
  }, [history])
// -------------------------------------------------------
  return (
    <div className="App">
      <Header />
      <Banner origen=" " />
      <CatTitle align="center" name="CATEGORÍAS" />
      <Categories
        data={[
          "Cortos para niños",
          "Crimen real",
          "Fanfiction",
          "Fantasia",
          "Halloween",
          "Paranormal",
          "Para no dormir",
          "Personal",
          "Real",
          "Urbano",
          "Vida"
        ]}
      />
      <Stories currentCategory={currentCategory} />
      <GlobalStyle />
    </div>
  );
};

export default SearchCategory;