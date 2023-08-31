import React from "react";
import { Span } from "./styled";

const Message = (props) => {
  return (
    <Span>{props.text}</Span>
  )
}

export default Message;