import React from "react";
import { Button, TextInput, Title, Wrap } from "./styled";
import Post from "./../my-post/my-post"



const MyPosts = (props) => {
  const NewPosts = props.dataPosts.map(item => { return <Post src={item.src} text={item.text} likes={item.likes} /> })

  return (
    <Wrap>
      <Title>My posts</Title>
      <TextInput placeholder="Ведите текст" />
      <Button>Отправить</Button>
      {NewPosts}

    </Wrap>)
}

export default MyPosts;