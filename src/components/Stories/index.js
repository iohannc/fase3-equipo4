import React, { useState, useEffect } from "react"; // Components
import CatTitle from "../Title";
import { SideHistories, SideHistories2 } from "./Stories.styles";

// import PropTypes from 'prop-types';
import ShowStories from "./ShowStories";


function Stories(props) {

  const leyenda = props.origen === ''?'HISTORIAS NUEVAS':"CATEGORIA ".concat(props.origen).toUpperCase();
  const tematica = props.origen === ''?'':props.origen;
  const [stories, setStories] = useState([]);
  const getStories = async () => {
    let fetchedStories;
    if(leyenda==='HISTORIAS NUEVAS') {
      fetchedStories = await fetch(
        "https://proyecto-equipo7.herokuapp.com/v1/historias/"
      );  
    } else {
      fetchedStories = await fetch(
        "https://proyecto-equipo7.herokuapp.com/v1/historias/buscarPorAtributo?tematica=".concat(tematica)
      );  
    }
    return await fetchedStories.json();
  };

  useEffect(() => {
    getStories().then((newStories) => {
      setStories(newStories);
    });
  });

  return (
    <>
      <SideHistories>
        <CatTitle name={leyenda} />
      </SideHistories>
      <SideHistories2>
        <ShowStories stories={[...stories]} />
      </SideHistories2>
    </>
  );
};

export default Stories;
