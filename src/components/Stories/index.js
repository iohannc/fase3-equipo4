import React, { useState, useEffect } from "react"; // Components
import CatTitle from "../Title";
import { SideHistories, SideHistories2 } from "./Stories.styles";

// import PropTypes from 'prop-types';
import ShowStories from "./ShowStories";


function Stories({ currentCategory }) {
  
  const leyenda = currentCategory === undefined ?'HISTORIAS NUEVAS':"CATEGORIA ".concat(currentCategory).toUpperCase();
  const tematica = currentCategory === ''?'':currentCategory;
  
  return (
    <>
      <SideHistories>
        <CatTitle name={leyenda} />
      </SideHistories>
      <SideHistories2>
        <ShowStories leyenda={leyenda} tematica={tematica} itemsPerPage={5}/>
      </SideHistories2>
    </>
  );
};

export default Stories;
