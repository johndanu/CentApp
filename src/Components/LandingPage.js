import { Button, Grid, IconButton } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { firebaseApp, provider } from "../fire";
import firebase from "firebase";
import { AuthContext } from "../Auth";
import { actionType } from "../Authreducer";
import { useFormik } from "formik";
import Snackbar from "@material-ui/core/Snackbar";

import CloseIcon from "@material-ui/icons/Close";
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
    },
  });
  const [open, setOpen] = useState(false);

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
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  let checkPhoneNo = (number) => {
    var regExp = /[0-9]/g;
    var phoneNo;
    if (regExp.test(number)) {
      if (number.charAt(0) === "0") {
        phoneNo = number.replace("0", "");
      } else {
        phoneNo = number;
      }
      if (phoneNo.charAt(0) === "7") {
        phoneNo = "+94" + phoneNo;
        return phoneNo;
      } else {
        return "invalid";
      }
    } else {
      return "invalid";
    }
  };
  let OTPClick = () => {
    let phoneNo = formik.values.phoneNo;
    let number = checkPhoneNo(phoneNo);
    if (number === "invalid") {
      handleClick();
    } else {
      var recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha", {
        size: "invisible",
      });
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
            localStorage.setItem("user", JSON.stringify(result.user));
            dispatch({
              type: actionType.SET_USER,
              user: result.user,
            });
          });
        })
        .catch((err) => {
          console.log(err);
          if (err.code === "auth/invalid-phone-number") {
            alert(
              "Your Phone no is incorrect please verify your phone no and retry"
            );
          }
        });
    }
  };
  useEffect(() => {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    console.log(user);
    dispatch({
      type: actionType.SET_USER,
      user: user,
    });
  }, []);
  const click = () => {
    try {
      firebaseApp
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          localStorage.setItem("user", JSON.stringify(result.user));

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
        {/* <div style={imageDivStyle}></div> */}
      </Grid>
      <Grid style={divStyle}>
        <h3>Member Login</h3>
        <Button variant="contained" onClick={click} style={buttonStyle}>
          Log in With Google
        </Button>

        <div>
          <input
            type="text"
            name="phoneNo"
            onChange={formik.handleChange}
            value={formik.values.phoneNo}
            maxlength="10"
            minLength="9"
          />
          <div id="recaptcha"></div>
          <Button variant="contained" onClick={OTPClick}>
            <p> kk </p>
            OTP
          </Button>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Invalid Phone No please check and retry.."
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </Grid>
    </Grid>
  );
}
