import styled from "styled-components";

export const DetailContainer = styled.article`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  padding: 0 20px;
`;

export const DetailHead = styled.h1`
  margin-bottom: 4rem;
  width: 100%;
  text-align: center;
  font-size: 3rem;
`;

export const DetailWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  gap: 3rem;

  @media only screen and (max-width: 693px) {
    grid-template-columns: 1fr;
  }
`;
