import { Button, Grid } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { firebaseApp, provider } from "../fire";
import firebase from "firebase";
import { AuthContext } from "../Auth";
import { actionType } from "../Authreducer";
import { useFormik } from "formik";

export default function LandingPage() {
  var style = {
    paddingTop: "1px",
    height: "85vh",
    width: "92.5vw",
    margin: "50px",
    backgroundColor: "#F2F2F2",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  };
  let checkOTP;
  const [OTPSent, setOTPSent] = useState(false);
  let formik = useFormik({
    initialValues: {
      phoneNo: "",
      OTP: "",
    },
  });
  var divStyle = {
    height: "35vh",
    width: "65vh",
    marginLeft: "10vh",
    marginTop: "20vh",
    paddingLeft: "5vh",
    paddingTop: "10vh",
    backgroundColor: "#F2F2F2",
    // boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  };

  var logoDivStyle = {
    marginLeft: "5vh",
    marginTop: "5vh",
    backgroundColor: "#F2F2F2",
    // boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  };

  var imageDivStyle = {
    height: "300px",
    width: "60vh",
    marginLeft: "8vh",
    marginTop: "8vh",
    paddingLeft: "20vh",
    paddingTop: "3vh",
    borderRedius: "10px",
    backgroundImage:
      "url(https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?size=626&ext=jpg)",
    // boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  };

  var buttonStyle = {
    padding: "2vh",
    color: "#ffffff",
    backgroundColor: "#756d5e",
  };

  const [user, dispatch] = useContext(AuthContext);

  let OTPClick = () => {
    console.log("clicker");
    var recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha", {
      size: "invisible",
    });
    let number = "+94774766597";
    firebaseApp
      .auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then((e) => {
        checkOTP = e;
        console.log(checkOTP);

        setOTPSent(true);
        let code = prompt("enter the otp", "");
        console.log(e);
        if (code == null) return;
        e.confirm(code).then((result) => {
          console.log(result, "result");
          dispatch({
            type: actionType.SET_USER,
            user: result.user,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const click = () => {
    try {
      firebaseApp
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          dispatch({
            type: actionType.SET_USER,
            user: result.user,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container xs={12} sm={12} spacing={3} style={style}>
      <Grid style={logoDivStyle}>
        <h1>Welcome to Zent</h1>
        <div style={imageDivStyle}></div>
      </Grid>
      <Grid style={divStyle}>
        <h3>Member Login</h3>
        <Button variant="contained" onClick={click} style={buttonStyle}>
          Log in With Google
        </Button>

        <div>
          <div id="recaptcha"></div>
          <Button variant="contained" onClick={OTPClick}>
            <p> kk </p>
            OTP
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
