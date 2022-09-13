import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  padding: 0 20px;
`;

export const MainWrap = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media only screen and (max-width: 1027px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 693px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
