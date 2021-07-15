import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ChatTypingSpace } from "./ChatTypingSpace";
import { ReceiverChat } from "./ReceiverChat";
import { SenderChat } from "./SenderChat";
import Firebase from "firebase";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { isEmpty } from "lodash";

export const MyChatRightBar = ({ chat, phoneNo }) => {
  let history = useHistory();
  let chatIdArray = history.location.pathname.split("/");
  let id = chatIdArray[chatIdArray.length - 1];
  if (id == "mychat") {
    id = null;
  }
  console.log(id, ">>>>?id");

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
      let sample = chat.find((item) => item.find((it) => it.id === id));
      // let sampleChat = sample.map((item) => {
      //   item.charts &&
      // });
      console.log(sample, "samlpwe");
      setFilteredChat(sample);
    }
  };

  useEffect(() => {
    getdata();
  }, [id]);
  console.log(filteredChat, "this is error");
  if (filteredChat) {
    filteredChat.map((item) => {
      if (item.chats) {
        console.log(item.chats, "//dd");
        setFilteredChat(() => item.chats);
      }
    });
    console.log(filteredChat, "//ddddddd");
  }
  console.log(filteredChat, ">>>");
  return (
    <div style={space}>
      <Router>
        <Switch>
          <Route path="/mychat/:id" exact>
            {JSON.stringify(filteredChat)}
            {filteredChat === null ? (
              <p>hello000</p>
            ) : (
              filteredChat &&
              filteredChat.map(
                (data) => (
                  console.log(data, "data"),
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
              )
            )}{" "}
            */}
          </Route>
        </Switch>
      </Router>
      {/* <ChatTypingSpace
        length={filteredChat === null ? null : filteredChat.chats.length}
        phoneNo={phoneNo}
      /> */}
    </div>
  );
};
