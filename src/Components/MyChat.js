import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { MyChatLeftBar } from "./MyChat/MyChatLeftBar";
import { MyChatRightBar } from "./MyChat/MyChatRightBar";
import { CentLogo } from "./MyChat/CentLogo";
import { ChatHeading } from "./MyChat/ChatHeading";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Firebase from "firebase";

export const MyChat = () => {
  var style = {
    paddingTop: "1px",
    height: "85vh",
    margin: "50px",
    backgroundColor: "#F2F2F2",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  };

  // var containerStyle = {
  //   backgroundColor: "white",
  // }
  // const [ChatCollections, setChatCollections] = useState([
  // {
  //   id: "",
  //   type: "",
  //   member: [],
  //   chats: [],
  // },
  // ]);

  // const getUserData = () => {
  //   console.log("sd===============+=");
  //   let ref = Firebase.database().ref("/PersonalChatCollection");
  //   ref.on("value", (snapshot) => {
  //     const state = snapshot.val();
  //     // console.log("DATA SAVED", state);
  //     // console.log("DATA SAVED", state);
  //     setChatCollections(state);
  //   });
  // };
  // useEffect(() => {
  //   getUserData();
  //   console.log("chat22======my ");
  // }, []);
  // console.log(ChatCollections, "chat");
  let ChatCollections = [
    {
      id: "chat001",
      type: "personal",
      members: ["0775647873", "0774766597"],
      chats: [
        {
          id: "message001",
          sender: "0774766597",
          message: "Hi Iam john Danushan",
        },
        {
          id: "message002",
          sender: "0775647873",
          message: "Hello John",
        },
        {
          id: "message003",
          sender: "0774766597",
          message: "how can i help you",
        },
        {
          id: "message001",
          sender: "0775647873",
          message: "May I call you tommoroww",
        },
      ],
    },
    {
      id: "chat002",
      type: "personal",
      members: ["0774548725", "0774766597"],
      chats: [
        {
          id: "message001",
          sender: "0774766597",
          message: "Hi Iam john Danushan",
        },
        {
          id: "message002",
          sender: "0774548725",
          message: "Hello John",
        },
        {
          id: "message003",
          sender: "0774548725",
          message: "how can i help you",
        },
        {
          id: "message001",
          sender: "0774766597",
          message: "where can I go for dinner",
        },
      ],
    },
    {
      id: "chat003",
      type: "personal",
      members: ["0774766597", "0776858489"],
      chats: [
        {
          id: "message001",
          sender: "0774766597",
          message: "Hi Iam john Danushan",
        },
        {
          id: "message002",
          sender: "0776858489",
          message: "Hello John",
        },
        {
          id: "message003",
          sender: "0774766597",
          message: "how can i help you",
        },
        {
          id: "message001",
          sender: "0776858489",
          message: "I dont need any help",
        },
      ],
    },
  ];

  return (
    // <div style={style}>
    <Grid style={style}>
      <Grid container>
        <Grid item xs={3}>
          <Link to="/">
            <CentLogo />
          </Link>
        </Grid>
        <Grid item xs={9}>
          <ChatHeading />
        </Grid>
      </Grid>
      {ChatCollections ? (
        <Grid container>
          <Grid item xs={3}>
            <MyChatLeftBar chat={ChatCollections} />
          </Grid>
          <Grid item xs={9}>
            <MyChatRightBar chat={ChatCollections} />
          </Grid>
        </Grid>
      ) : (
        <div></div>
      )}
    </Grid>
    // </div>
  );
};
