import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled(Link)`
  max-width: 500px;
  text-decoration: none;
  cursor: pointer;
`;

export const ImgContainer = styled.div`
  width: 100%;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
