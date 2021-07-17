import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ChatTypingSpace } from "./ChatTypingSpace";
import { ReceiverChat } from "./ReceiverChat";
import { SenderChat } from "./SenderChat";
// import Firebase from "firebase";
import { useHistory } from "react-router-dom";

export const MyChatRightBar = ({ chat, phoneNo }) => {
  let history = useHistory();
  let chatIdArray = history.location.pathname.split("/");
  let id = chatIdArray[chatIdArray.length - 1];
  if (id == "mychat") {
    id = null;
  }
  const space = {
    padding: "15px",
    height: "70.1vh",
    backgroundImage:
      "url(https://i.pinimg.com/originals/ab/ab/60/abab60f06ab52fa7846593e6ae0c9a0b.png)",
    overflowY: "scroll",
  };

  const [filteredChat, setFilteredChat] = useState([]);
  const getdata = () => {
    if (id === null) {
    } else {
      let sample = chat.find((item) => item.find((it) => it.id === id));
      setFilteredChat(sample);
    }
  };

  useEffect(() => {
    getdata();
  }, [id]);
  if (filteredChat) {
    filteredChat.map((item) => {
      if (item.chats) {
        setFilteredChat(() => item.chats);
      }
    });
  }
  return (
    <div style={space}>
      {filteredChat === null ? (
        <p>hello000</p>
      ) : (
        filteredChat &&
        filteredChat.map((data) =>
          data.sender === phoneNo ? (
            <Grid container>
              <Grid item sm={6} />
              <Grid item sm={6}>
                sdsds
                <SenderChat message={data.message} />
              </Grid>
            </Grid>
          ) : (
            <Grid container>
              <Grid item sm={6}>
                <ReceiverChat message={data.message} />
              </Grid>
            </Grid>
          )
        )
      )}
      <ChatTypingSpace
        length={filteredChat === null ? null : filteredChat.length}
        phoneNo={phoneNo}
      />
    </div>
  );
};
