import React from "react";
import {
  DetailCardContainer,
  DetailImgContainer,
  DetailImg,
} from "./DetailCardElements";

const DetailCard = (props) => {
  return (
    <DetailCardContainer>
      <h1>{props.displayName}</h1>
      <DetailImgContainer>
        <DetailImg src={props.displayIcon} />
      </DetailImgContainer>
    </DetailCardContainer>
  );
};

export default DetailCard;
