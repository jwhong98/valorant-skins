import React from "react";
import { CardContainer, ImgContainer, CardImg } from "./CardElements";

const Card = (props) => {
  const onClickHandler = () => {
    props.renderDetail(props.displayName);
  };
  return (
    <CardContainer
      onClick={onClickHandler}
      to={`/skins/${props.displayName.replace(/\s+/g, "")}`}
    >
      <h1>{props.displayName}</h1>
      <ImgContainer>
        <CardImg src={props.displayIcon} />
      </ImgContainer>
    </CardContainer>
  );
};

export default Card;
