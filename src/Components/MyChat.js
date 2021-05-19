import React, { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { MyChatLeftBar } from "./MyChat/MyChatLeftBar";
import { MyChatRightBar } from "./MyChat/MyChatRightBar";
import { CentLogo } from "./MyChat/CentLogo";
import { ChatHeading } from "./MyChat/ChatHeading";
import { Link } from "react-router-dom";
import Firebase from "firebase";
import LandingPage from "./LandingPage";
import { AuthContext } from "../Auth";
// import axios from 'axios'

export const MyChat = ({ phoneNo }) => {
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
  const [ChatCollections2, setChatCollections2] = useState([]);
  const [user] = useContext(AuthContext);

  const [value, setValue] = useState(false);

  const getUserData = () => {
    // console.log("sd===============+=");
    let ref = Firebase.database().ref("/PersonalChatCollection");
    ref.on("value", (snapshot) => {
      const state = snapshot.val();
      console.log("DATA SAVED", state);
      setChatCollections2(state);
      setValue(true);
    });
  };
  useEffect(() => {
    getUserData();
  }, []);
  console.log(ChatCollections2, "chat");

  console.log(value);

  return (
    // <div style={style}>
    <Grid style={style}>
      {user.user ? (
        value ? (
          <React.Fragment>
            <Grid container>
              <Grid item xs={3}>
                <Link to="/">
                  <CentLogo url={user.user.photoURL} />
                </Link>
              </Grid>
              <Grid item xs={9}>
                <ChatHeading />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={3}>
                <MyChatLeftBar chat={ChatCollections2} phoneNo={phoneNo} />
              </Grid>
              <Grid item xs={9}>
                <MyChatRightBar chat={ChatCollections2} phoneNo={phoneNo} />
              </Grid>
            </Grid>
          </React.Fragment>
        ) : (
          <div> Loading </div>
        )
      ) : (
        <LandingPage />
      )}
    </Grid>
    // </div>
  );
};
