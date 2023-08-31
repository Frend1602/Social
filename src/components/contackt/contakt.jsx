import React from "react"
import { NavLink } from "react-router-dom";
import { Li } from "./styled";

const ContactItem = (props) => {
  return (
    <Li><NavLink to={"/dialog-page/" + props.id}>{props.name}</NavLink></Li>
  )
}

export default ContactItem;