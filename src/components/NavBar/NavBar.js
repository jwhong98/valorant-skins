import React from "react";
import { NavContainer, NavWrap, NavHead } from "./NavBarElements";

const NavBar = () => {
  return (
    <NavContainer>
      <NavWrap>
        <NavHead to="/">Valorant Skins</NavHead>
      </NavWrap>
    </NavContainer>
  );
};

export default NavBar;
