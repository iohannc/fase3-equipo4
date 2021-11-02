import React, { useState, useEffect } from "react";
import { StoriesS } from "./Stories.styles";

const ItemList = ({ item }) => {
  return (
    <>
      <h2>{item.titulo}</h2>
      <p
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {item.texto}
        <br />
        <br />
        <a>Leer completa</a>
      </p>
      <hr />
    </>
  );
};

const ShowStories = () => {
  const [stories, setStories] = useState([]);

  const getStories = async () => {
    const fetchedStories = await fetch(
      "https://proyecto-equipo7.herokuapp.com/v1/historias/"
    );
    return await fetchedStories.json();
  };

  useEffect(() => {
    getStories()
      .then((newStories) => setStories(newStories))
      .catch((err) => console.log(err));
  });

  return (
    <StoriesS>
      {stories.map((item) => (
        <ItemList item={item}></ItemList>
      ))}
    </StoriesS>
  );
};

export default ShowStories;
