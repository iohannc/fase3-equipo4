import React from "react";
import { Title } from "./Title.styles";

const CatTitle = (props) => {
  return (
    <Title
      style={{
        justifyContent: `${props.align == "center" ? "center" : "left"}`,
      }}
    >
      <h2>{props.name}</h2>
    </Title>
  );
};

export default CatTitle;
