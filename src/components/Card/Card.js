import React from "react";
import { CardContainer, ImgContainer, CardImg } from "./CardElements";

const Card = (props) => {
  return (
    <CardContainer>
      <h1>{props.displayName}</h1>
      <ImgContainer>
        <CardImg src={props.displayIcon} />
      </ImgContainer>
    </CardContainer>
  );
};

export default Card;
