import React from "react";
import { NavLink } from "react-router-dom";
import { Li, Ul } from "./styled";

const styleActive = ({ isActive }) => ({ color: isActive ? 'gold' : 'white' })

const Nav = () => {
  return (
    <Ul>
      <Li><NavLink to="/main-page" style={styleActive}>Profile</NavLink></Li>
      <Li><NavLink to="/dialog-page" style={styleActive}>Messages</NavLink></Li>
      <Li><NavLink to="/news-page" style={styleActive}>News</NavLink></Li>
      <Li>Music</Li>
      <Li>Settings</Li>
    </Ul>

  );
}

export default Nav;