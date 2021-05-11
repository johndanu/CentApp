import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ChatTypingSpace } from "./ChatTypingSpace";
import { ReceiverChat } from "./ReceiverChat";
import { SenderChat } from "./SenderChat";

export const MyChatRightBar = (props) => {
  const [chat, setChat] = useState([]);

  const space = {
    padding: "15px",
    height: "72vh",
    backgroundImage:
      "url(https://i.pinimg.com/originals/ab/ab/60/abab60f06ab52fa7846593e6ae0c9a0b.png)",
    overflowY: "scroll",
  };

  let id = window.location.href.split("/");
  id = id[id.length - 1];
  const [filteredChat, setFilteredChat] = useState({});
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    console.log("dmfp");
    setTimeout(() => {
      setFilteredChat(
        props.chat.find((item) => {
          if (item.id == id) {
            return item;
          }
        })
      );
      setTimeout(() => {
        setLoading(true);
      }, 2000);
    }, 1000);
  }, []);
  // console.log(filteredChat.chats, "====filteredChat ");
  // console.log();
  // let filteredChat = {
  //   chats: [s
  //     {
  //       name: "john",
  //     },
  //   ],
  // };
  return (
    <div style={space}>
      {JSON.stringify(filteredChat, "sdf")}
      {Loading &&
        filteredChat.chats.map(([key, data]) => {
          if (data.sender == "0774766597") {
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
        })}
      <ChatTypingSpace />
    </div>
  );
};
