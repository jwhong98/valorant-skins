import React from "react";
import Search from "../Search/Search";
import { NavContainer, NavWrap, NavHead } from "./NavBarElements";

const NavBar = (props) => {
  return (
    <NavContainer>
      <NavWrap>
        <NavHead to="/">Valorant Skins</NavHead>
        <Search setQuery={props.setQuery} />
      </NavWrap>
    </NavContainer>
  );
};

export default NavBar;
