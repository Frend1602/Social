import styled from "styled-components";

export const Wrap = styled.div`
display:grid;
grid-template-columns: 70px 1fr;
`

export const Avatar = styled.img`
  background: yellow;
  width: 50px;
  height: 50px;
  border-radius:50%;
`

export const Text = styled.span`
  
`

export const Likes = styled.span`
grid-column:2/3;
`