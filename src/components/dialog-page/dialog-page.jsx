import React from "react";
import { sendMessage, updateMessage } from "../../moks/data";
import ContactItem from "../contackt/contakt";
import Message from "../message/message";
import { Contacts, Messages, Wrap } from "./styled";

const DialogPage = (props) => {

  const NewContacts = props.data.dialogPage.dataContacts.map((item) => {
    return (<ContactItem name={item.name} id={item.id} />)
  });
  const NewMessages = props.data.dialogPage.dataMessages.map(item => {
    return <Message text={item.text} />
  });

  const newMessageBody = props.data.dialogPage.newMessageBody;

  const ebonk = () => { props.dispatch(sendMessage()) };
  const sendMessagee = (event) => {
    const body = event.target.value;
    props.dispatch(updateMessage(body));

  };

  return (
    <Wrap>
      <Contacts >
        {NewContacts}
      </Contacts>
      <Messages>
        {NewMessages}
      </Messages>
      <textarea placeholder="enter message" value={newMessageBody} onChange={sendMessagee}></textarea>
      <button onClick={ebonk}>ebon'k</button>
    </Wrap >

  )
}

export default DialogPage;