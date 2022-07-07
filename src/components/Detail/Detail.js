import React, { useState, useEffect } from "react";
import DetailCard from "./DetailCard";
import { DetailContainer, DetailHead, DetailWrap } from "./DetailElements";

const Detail = (props) => {
  const [bundle, setBundle] = useState([]);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/weapons/skins")
      .then((res) => res.json())
      .then((result) => {
        let arr = [];
        for (let i = 0; i < result.data.length; i++) {
          if (result.data[i].displayName.includes(props.displayName)) {
            arr.push(result.data[i]);
          }
        }
        setBundle(arr);
      });
  }, [props.displayName]);

  const createDetailCard = (data) => {
    return (
      <DetailCard
        key={data.uuid}
        displayName={data.displayName}
        displayIcon={data.displayIcon}
        onClick={props.onClick}
      />
    );
  };
  return (
    <DetailContainer>
      <DetailHead>{props.displayName} Bundle</DetailHead>
      <DetailWrap>{bundle.map(createDetailCard)}</DetailWrap>
    </DetailContainer>
  );
};

export default Detail;
