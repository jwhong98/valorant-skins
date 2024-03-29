import styled from "styled-components";

export const DetailCardContainer = styled.article`
  width: 100%;
  max-width: 512px;
  height: 300px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 693px) {
    height: 250px;
  }
`;

export const DetailImgContainer = styled.div`
  width: 100%;
  align-self: center;
  margin: auto;
  max-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailImg = styled.img`
  max-width: 100%;
  height: 100%;
  cursor: zoom-in;
`;
