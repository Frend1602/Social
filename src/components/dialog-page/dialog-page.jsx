import React from "react";
import ContactItem from "../contackt/contakt";
import Message from "../message/message";
import { Contacts, Messages, Wrap } from "./styled";

const DialogPage = () => {
  return (
    <Wrap>
      <Contacts >
        <ContactItem name="Caser" id="1" />
        <ContactItem name="Piter" id="2" />
        <ContactItem name="Andrey" id="3" />
        <ContactItem name="Nikol" id="4" />
        <ContactItem name="Batman" id="5" />
      </Contacts>
      <Messages>
        <Message text="Hallo"></Message>
        <Message text="good morning"></Message>
        <Message text="i`m fine"></Message>
      </Messages>
    </Wrap >

  )
}

export default DialogPage;