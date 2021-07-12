import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ChatTypingSpace } from "./ChatTypingSpace";
import { ReceiverChat } from "./ReceiverChat";
import { SenderChat } from "./SenderChat";
import Firebase from "firebase";

export const MyChatRightBar = ({ id, chat, phoneNo }) => {
  // const [chat, setChat] = useState([]);
  // // useEffect((props) => {
  // // console.log();
  // console.log(props.chat, "=======chat");
  // // let chat = [];
  // // }, []);
  const space = {
    padding: "15px",
    height: "70.1vh",
    backgroundImage:
      "url(https://i.pinimg.com/originals/ab/ab/60/abab60f06ab52fa7846593e6ae0c9a0b.png)",
    overflowY: "scroll",
  };

  const [filteredChat, setFilteredChat] = useState(null);
  const getdata = () => {
    console.log("get data", id);
    if (id === null) {
    } else {
      let sample = chat.find((item) => {
        return item.id === id;
      });
      setFilteredChat(sample);
    }
  };

  useEffect(() => {
    getdata();
    console.log(filteredChat, "this is error");
  }, [id]);
  // const [filteredChat, setFilteredChat] = useState([]);
  // // let filteredChat = [];
  // setFilteredChat(
  //   chat.find((item) => {
  //     if (item.id == id) {
  //       return item;
  //     }
  //   })
  // );
  // console.log(chat, "====arrayfl");
  // let filteredChat = {
  //   chats: [s
  //     {
  //       name: "john",
  //     },
  //   ],
  // };
  return (
    <div style={space}>
      {filteredChat === null ? (
        <p>hello</p>
      ) : (
        filteredChat.chats.map((data) => {
          if (data.sender === phoneNo) {
            return (
              <Grid container>
                <Grid item sm={6} />
                <Grid item sm={6}>
                  <SenderChat message={data.message} />
                </Grid>
              </Grid>
            );
          } else {
            return (
              <Grid container>
                <Grid item sm={6}>
                  <ReceiverChat message={data.message} />
                </Grid>
              </Grid>
            );
          }
        })
      )}
      <ChatTypingSpace
        length={filteredChat === null ? null : filteredChat.chats.length}
        phoneNo={phoneNo}
      />
    </div>
  );
};
