import React, { useEffect } from "react";
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

// import SearchForm from '../SearchForm/index';
import Header from "../Header/index4";
// import SearchForm from "../SearchForm";
import Banner from "../Banner/index3";
import Stories from "../Stories/index";
import CatTitle from "../Title";
import Categories from "../Categories";
import { GlobalStyle } from "../../GlobalStyle";


const SearchCategory = (props) => {
  let historia = useHistory();
  let busq = historia.location.pathname.split("/")[2];
  // let origen = "Categoría ".concat(busq);
  // let origen = "Resultado búsqueda";
  let origen = busq;
  console.log("SearchCategory--> busq-->", busq);
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
      <Stories origen={origen} />
      <GlobalStyle />
    </div>
  );
};

export default SearchCategory;
