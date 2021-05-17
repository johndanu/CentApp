import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Firebase from "firebase";

const wrapperDiv = {
  width: "100vh",
  padding: "10px",
};
const styleTypingSpace = {
  backgroundColor: "#f2f2f2",
  position: "fixed",
  bottom: "10px",
  right: "125px",
  height: "50px",
  width: "68.5vw",
  padding: "5px",
  marginBottom: "3.8vw",
  marginRight: "-4.3vw",
  border: " 1px solid rgba(255, 255, 255, 0.18)",
};
const styleMsgBox = {
  backgroundColor: "#D8D1C9",
  height: "40px",
  marginBottom: "5vh",
  width: "90%",
  WebkitBackdropFilter: " blur(4px)",
  border: " 1px solid rgba(255, 255, 255, 0.18)",
  display: "flex",
};

const buttonStle = {
  // display: "flex",
};

export const ChatTypingSpace = (props) => {
  const handleClick = () => {
    let id = window.location.href.split("/");
    id = id[id.length - 1].split("");
    id = id[id.length - 1];
    id = parseInt(id) - 1;
    let link = "/PersonalChatCollection/" + id + "/chats/" + props.length;
    let ref = Firebase.database().ref(link);
    let chatData = {
      id: `message00${props.length}`,
      message: document.getElementById("myMessage").value,
      sender: "0774766597",
    };
    ref.set(chatData);
    console.log(link);
  };

  // const [myMessage, setMyMessage] = useState();

  return (
    <div style={styleTypingSpace}>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          height: "50px",
        }}
      >
        <input
          type="text"
          placeholder="Enter your message.."
          style={styleMsgBox}
          id="myMessage"
          // value={myMessage}
        />
        <IconButton style={buttonStle} onClick={handleClick}>
          <SendIcon />
        </IconButton>
      </form>
    </div>
  );
};
