import React from "react";
import {
  CardContainer,
  CardTitle,
  ImgContainer,
  CardImg,
} from "./CardElements";

const Card = (props) => {
  const onClickHandler = () => {
    props.renderDetail(props.displayName);
  };
  return (
    <CardContainer
      onClick={onClickHandler}
      to={`/skins/${props.displayName.replace(/\s+/g, "")}`}
    >
      <CardTitle>{props.displayName}</CardTitle>
      <ImgContainer>
        <CardImg src={props.displayIcon} alt={props.displayName} />
      </ImgContainer>
    </CardContainer>
  );
};

export default Card;
