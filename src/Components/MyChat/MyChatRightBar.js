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
  console.log(id);
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
      setFilteredChat(() => chat[0][1]);
    } else {
      let sample = [];
      for (let i = 0; i < chat.length - 1; i++) {
        if (id == chat[i][0]) {
          console.log(chat[i][1], "///");
          setFilteredChat(() => chat[i][1]);
        }
      }
      // });
      // console.log(chat[i][1], "////");
    }
  };

  useEffect(() => {
    getdata();
  }, [chat, id]);
  // console.log(chat, "changee");
  // if (filteredChat) {
  //   Object.entries(filteredChat).map(([key, item]) => {
  //     if (item.chats) {
  //       setFilteredChat(item);
  //     }
  //   });
  // }
  console.log(filteredChat.chats, "data");
  return (
    <div style={space}>
      {filteredChat.length < 0 ? (
        <p>hello000</p>
      ) : (
        filteredChat.chats &&
        Object.entries(filteredChat.chats).map(([key, data]) =>
          data.sender === phoneNo ? (
            <Grid container>
              <Grid item sm={6} />
              <Grid item sm={6}>
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
        // length={filteredChat === null ? null : filteredChat.length}
        phoneNo={phoneNo}
      />
    </div>
  );
};
