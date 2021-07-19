import { Button, Grid, IconButton } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { firebaseApp, provider } from "../../fire";
import firebase from "firebase";
import { AuthContext } from "../../Auth";
import { actionType } from "../../Authreducer";
import { useFormik } from "formik";
import Snackbar from "@material-ui/core/Snackbar";
import Logo from "../../images/Subtract.svg"
import Girl from "../../images/Lady.png"
import CloseIcon from "@material-ui/icons/Close";
import { color } from "@material-ui/system";
import Container from '@material-ui/core/Container';
import {useTheme } from '@material-ui/core';
import ZentHeader from '../../Components/core/Header/header'
export default function Landing() {
    const theme = useTheme()

  var style = {
    marginTop: "6%",
    height: "85vh",
    width: "92.5vw",
    backgroundColor:theme.palette.primary.main,
    borderRadius:'25px',
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
    height: "90%",
    width: "95%",
    borderRadius:'25px',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

 
    backgroundColor: "#E8F0F2",
  };

  var logoDivStyle = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    margin:'0 auto',
    width:'20%',
    paddingTop: "10%",

  };
  var mainStyle ={
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
  };


 var Inputbox={
width:'281px',
height:'46px',
backgroundColor:'#E8F0F2',
color:'#053742',
textAlign:'center',
borderRadius:'20px',
border:'none',
fontSize:'20px',
outline: 'none',

 };
  var buttonStyle = {
    padding: "2vh",
    color: "#ffffff",
    backgroundColor: "#756d5e",
  };
  var Form={
    backgroundColor:theme.palette.secondary1.main,
    width:'100%',
    maxWidth:'400px',
    height:'100%',
    maxHeight:'400px',
    borderRadius:'25px',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    flexDirection:'column'


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
      <div > 
      <Container > 
    <Grid container xs={12} sm={12} spacing={3} style={style}>
      <Grid item xs={2} style={logoDivStyle}>
        
        <div>
            <img src={Logo}/>
        </div>
        <div>
        <h1 style={{color:theme.palette.text.main,textAlign:'center'}}>Zent.App</h1>
        <p style={{color:theme.palette.text.main,textAlign:'center'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
        </div>
      </Grid>
      <Grid item xs={10} style={mainStyle} >

          <div style={divStyle}>  
            <div>
            <img src={Girl}/>
            </div>
            <div style={Form}>
            <h2>Sign Up
</h2>
        {/* <Button variant="contained" onClick={click} style={buttonStyle}>
          Log in With Google
        </Button> */}

        <div>
          <input
            type="text"
            name="phoneNo"
            style={Inputbox}
            onChange={formik.handleChange}
            value={formik.values.phoneNo}
            maxlength="10"
            minLength="9"
            placeholder="Enter Your Phone Number"
          />
          <div id="recaptcha"></div>
          <Button style={{color:theme.palette.text.main, backgroundColor:theme.palette.primary.main, borderRadius:'16px' , float:'right',marginTop:'16px'}} variant="contained" onClick={OTPClick}>
Sent            OTP
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
        <div>  <p style={{padding:'20px',textAlign:'center',color:theme.palette.primary.main}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
</p> </div>
      
            </div>
<ZentHeader/>
         

          </div>

      </Grid>
    </Grid>
    </Container>
    </div>
  );
}