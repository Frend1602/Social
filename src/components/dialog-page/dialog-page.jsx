import React from "react";
import ContactItem from "../contackt/contakt";
import Message from "../message/message";
import { Contacts, Messages, Wrap } from "./styled";

const dataContacts = [
  {
    id: 1,
    name: "Caser",
  }, {
    id: 2,
    name: "Piter",
  }, {
    id: 3,
    name: "Andrey",
  }, {
    id: 4,
    name: "Nikol",
  }, {
    id: 5,
    name: "Batman",
  }, {
    name: "Пёс",
    id: 6,
  }
];

// const dataMessages = [
//   { text: "Hallo" },
//   { text: "good morning" },
//   { text: "i`m fine" },
//   { text: "gdfsfdhb" },
//   { text: "654vyhtr" }
// ]



const DialogPage = (props) => {
  const NewContacts = dataContacts.map((item) => { return (<ContactItem name={item.name} id={item.id} />) });
  const NewMessages = props.dataMessages.map(item => { return <Message text={item.text} /> })

  return (
    <Wrap>
      <Contacts >
        {NewContacts}
      </Contacts>
      <Messages>
        {NewMessages}
      </Messages>
    </Wrap >

  )
}

export default DialogPage;