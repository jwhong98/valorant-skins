import React from "react";
import { CardContainer, ImgContainer, CardImg } from "./CardElements";

const Card = (props) => {
  const onClickHandler = () => {
    props.renderDetail(props.displayName);
  };
  return (
    <CardContainer onClick={onClickHandler}>
      <h1>{props.displayName}</h1>
      <ImgContainer>
        <CardImg src={props.displayIcon} />
      </ImgContainer>
    </CardContainer>
  );
};

export default Card;
