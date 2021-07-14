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
  const [ChatCollections2, setChatCollections2] = useState([]);
  const [user] = useContext(AuthContext);
  const [value, setValue] = useState(false);
  let phoneNo = null;
  const [id, setId] = useState(null);

  const getUserData = () => {
    phoneNo = user.user.phoneNumber;
    let ref = Firebase.database()
      .ref("/PersonalChatCollection")
      .orderByChild("members");
    ref.on("value", (snapshot) => {
      var state = [];
      var state = snapshot.val();
      var filterNo = Object.entries(state).filter(([key, val]) => (
        val.members && val.members.find((d) =>( d == phoneNo))
      ))
      console.log(filterNo,'f////');
      setChatCollections2(filterNo);
      setValue(true);
    });
  };
  useEffect(() => {
    if (user.user) {
      getUserData();
    }
  }, [user]);
  console.log(ChatCollections2, "filter_chat");

  return (
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
                <MyChatLeftBar
                  chat={ChatCollections2}
                  phoneNo={phoneNo}
                  setId={setId}
                />
              </Grid>
              <Grid item xs={9}>
                <MyChatRightBar
                  chat={ChatCollections2}
                  phoneNo={phoneNo}
                  id={id}
                />
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
  );
};
