import React from "react";
import { Button, TextInput, Title, Wrap } from "./styled";
import Post from "./../my-post/my-post"

const MyPosts = () => {
  return (
    <Wrap>
      <Title>My posts</Title>
      <TextInput placeholder="Ведите текст" />
      <Button>Отправить</Button>
      <Post likes="3" text="My first post from love" />
      <Post text="Good " likes="58" />
      <Post likes="32" />
      <Post />
      <Post />
    </Wrap>)
}

export default MyPosts;