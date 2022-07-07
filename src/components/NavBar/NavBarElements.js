import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.section`
  width: 100%;
  height: 80px;
  margin-bottom: 2rem;
  position: sticky;
  top: 0;
`;

export const NavWrap = styled.nav`
  width: 100%;
  max-width: 1300px;
  height: 80px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavHead = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
`;
