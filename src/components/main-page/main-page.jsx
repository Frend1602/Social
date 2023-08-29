import React from "react";
import MyPosts from "../my-posts/my-posts";
import { ImgTop } from "./styled";

const MainPage = () => {
  return (
    <div className="main">
      <ImgTop src="https://img.freepik.com/free-photo/front-view-woman-holding-wagasa-umbrella_23-2149557126.jpg?w=900&t=st=1693288792~exp=1693289392~hmac=5204a1d476a280bed624387a9fe209c4ef10055ef76ef06fe0d674e84a6c42cc" />
      <div>Profile</div>
      <MyPosts />
    </div>)
};

export default MainPage;