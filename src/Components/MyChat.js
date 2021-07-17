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

export const MyChat = () => {
  const [user] = useContext(AuthContext);
  var style = {
    paddingTop: "1px",
    height: "85vh",
    margin: "50px",
    backgroundColor: "#F2F2F2",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  };
  const [ChatCollections2, setChatCollections2] = useState([]);
  const [value, setValue] = useState(false);
  const [phoneNo, setPhoneNo] = useState({
    user: {
      user: {
        phoneNumber: null,
      },
    },
  });
  const [id, setId] = useState(null);
  // if (user.user) {
  //   console.log(user.user.phoneNumber, phoneNo, "user");
  //   setPhoneNo(user.user.phoneNo);
  // }

  const getUserData = () => {
    setPhoneNo(user.user.phoneNumber);
    let ref = Firebase.database()
      .ref("/PersonalChatCollection/PersonalChatCollection")
      .orderByChild("members");
    ref.on("value", (snapshot) => {
      var state = snapshot.val();
      var filterNo = Object.entries(state).filter(
        ([key, val]) =>
          val.members && val.members.find((d) => d == user.user.phoneNumber)
      );
      setChatCollections2(filterNo);
      setValue(true);
    });
  };
  useEffect(() => {
    if (user.user != null) {
      console.log(user, "22222");
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
                {phoneNo && (
                  <MyChatLeftBar
                    chat={ChatCollections2}
                    phoneNo={phoneNo}
                    setId={setId}
                  />
                  // <p>ss</p>
                )}
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
