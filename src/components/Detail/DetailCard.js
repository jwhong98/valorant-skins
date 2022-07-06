import React from "react";
import {
  DetailCardContainer,
  DetailImgContainer,
  DetailImg,
} from "./DetailCardElements";

const DetailCard = (props) => {
  const onClickHandler = () => {
    props.onClick(props.displayIcon);
  };
  return (
    <DetailCardContainer>
      <h1>{props.displayName}</h1>
      <DetailImgContainer>
        <DetailImg src={props.displayIcon} onClick={onClickHandler} />
      </DetailImgContainer>
    </DetailCardContainer>
  );
};

export default DetailCard;
