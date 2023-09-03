import React from "react";
import { Avatar, Wrap, Text, Likes } from "./styled";

const Post = (props) => {
  return (
    <Wrap>
      <Avatar src={props.src} />
      <Text>{props.text}</Text>
      <Likes>Likes {props.likes}</Likes>
    </Wrap>
  )
}

export default Post;