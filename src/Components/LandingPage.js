import { Button, Grid } from "@material-ui/core";
import React, { useCallback, useContext } from "react";
import { firebaseApp, auth, provider } from "../fire";
import firebase from "firebase";
import { CreditCard } from "@material-ui/icons";
import { AuthContext } from "../Auth";
import { actionType } from "../Authreducer";

export default function LandingPage() {
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
    <Grid container xs={12} sm={12} spacing={3}>
      <Grid item alignContent="center" justify="center">
        {/* <form onSubmit={click}>
                    <div id='recaptcha'></div>
                    <input type='text' />
                    <button type='submit'>Click</button>
                </form> */}
        <button onClick={display}>button</button>
        <Button variant="contained" color="secondary" onClick={click}>
          Log in With Google
        </Button>
      </Grid>
    </Grid>
  );
}
