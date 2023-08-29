import React from "react";
import { Avatar, Wrap, Text, Likes } from "./styled";

const Post = (props) => {
  return (
    <Wrap>
      <Avatar src="https://cdn-icons-png.flaticon.com/128/4205/4205906.png" />
      <Text>{props.text}</Text>
      <Likes>Likes {props.likes}</Likes>
    </Wrap>
  )
}

export default Post;