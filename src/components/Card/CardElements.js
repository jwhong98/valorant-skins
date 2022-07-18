import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled(Link)`
  max-width: 500px;
  text-decoration: none;
  cursor: pointer;
`;

export const CardTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 15px;
`;

export const ImgContainer = styled.div`
  width: 100%;
  border-radius: 10px;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;
