import React, { useState, useEffect } from "react"; // Components
import CatTitle from "../Title";
import { SideHistories, SideHistories2 } from "./Stories.styles";

// import PropTypes from 'prop-types';
import ShowStories from "./ShowStories";

function Stories() {
  const [stories, setStories] = useState([]);
  const getStories = async () => {
    const fetchedStories = await fetch(
      "https://proyecto-equipo7.herokuapp.com/v1/historias/"
    );
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
        <CatTitle name="HISTORIAS NUEVAS" />
      </SideHistories>
      <SideHistories2>
        <ShowStories stories={[...stories]} />
      </SideHistories2>
    </>
  );
};

export default Stories;
