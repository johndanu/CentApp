import { Button, Grid } from "@material-ui/core";
import React, { useCallback, useContext } from "react";
import { firebaseApp, auth, provider } from "../fire";
import firebase from "firebase";
import { CreditCard } from "@material-ui/icons";
import { AuthContext } from "../Auth";
import { actionType } from "../Authreducer";

export default function LandingPage() {
  var style = {
    paddingTop: "1px",
    height: "85vh",
    width: "185vh",
    margin: "50px",
    backgroundColor: "#F2F2F2",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  };

  var divStyle = {
    height: "35vh",
    width: "80vh",
    marginLeft: "5vh",
    marginTop: "20vh",
    paddingLeft: "5vh",
    paddingTop:'10vh',
    backgroundColor: "#F2F2F2",
    // boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  };

  var buttonStyle = {
    backgroundColor: "#F2F2F2",
    color: "#ffffff",
    backgroundColor: "#756d5e",
  };

  const [user, dispatch] = useContext(AuthContext);
  const click = () => {
    try {
      firebaseApp
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          var user = result.user;
          dispatch({
            type: actionType.SET_USER,
            user: result.user,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  const display = () => {
    alert(user.displayName);
  };
  return (
    <Grid container xs={12} sm={12} spacing={3} style={style}>
      <Grid>
        <div style={divStyle}>Logo</div>
      </Grid>
      <Grid>
        <div style={divStyle}>
          <h3>Member Login</h3>
          <Button variant="contained" onClick={click} style={buttonStyle}>
            Log in With Google
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
