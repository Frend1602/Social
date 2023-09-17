import React from "react";
import { Button, TextInput, Title, Wrap } from "./styled";
import Post from "./../my-post/my-post";

const addPostAction = (text) => ({ type: 'ADD-POST', text: text });

const onPostChangeAction = (text) => ({ type: 'CHANGE-POST', newText: text })


const MyPosts = (props) => {
  const NewPosts = props.data.dataPosts.map(item => { return <Post src={item.src} text={item.text} likes={item.likes} /> });

  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostAction(newPostElement.current.value))
  };

  const onPostChange = () => {
    let text = newPostElement.current.value
    props.dispatch(onPostChangeAction(text));
  };

  return (
    <Wrap>
      <Title>My posts</Title>
      <TextInput onChange={onPostChange} value={props.data.newPostText} ref={newPostElement} />
      <Button onClick={addPost}>Отправить</Button>
      {NewPosts}
    </Wrap>)
    ;
};

export default MyPosts;
