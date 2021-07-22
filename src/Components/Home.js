import React, { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Firebase from "firebase";
import { ChatHeadingFromHome } from "./Home/ChatHeadingFromHome";
import { AuthContext } from "../Auth";
import LandingPage from "./LandingPage";
import { Link } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";
import staticProfile from "../files/profile.png";
import { actionType } from "../Authreducer";
import ZentHeader from '../Components/core/Header/header'
import {useTheme } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  avatar: {
    border: "5px solid white ",
    width: "50px",
    height: "50px",
  },
   divStyle : {
    // marginTop: "6%",
    margin:'0 auto',
     height: "85vh",
     width: "92.5vw",
     backgroundColor:theme.palette.primary.main,
     borderRadius:'25px',
     boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
   },
    style : {
    padding: "20px",
    height: "77.5vh",
    margin: "50px",
    overflowY: "scroll",
    width: "172vw",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backgroundColor:theme.palette.primary.main,

  },
    
   padding : {
    padding: "10px",
    marginTop: "1px",
   // border: " 1px solid #F2F2F2",
  },
}));

export const  Home = (props) => {
  const theme = useTheme()
  const classes = useStyles();
  const [phoneNo, setPhoneNo] = useState(null);
  const [learningInstitutes, setLearningInstitutes] = useState([]);
  const [teachingInstitutes, setTeachingInstitutes] = useState([]);
  const [value, setValue] = useState(false);
  const [user, dispatch] = useContext(AuthContext);
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({
      type: actionType.SET_USER,
      user: "",
    });
  };
  const getClassData = () => {
    if (!user.user) {
      console.log("data not fetched");
    } else {
      let ref = Firebase.database().ref("/ClassCollection");
      console.log(phoneNo);
      ref.on("value", (snapshot) => {
        const state = snapshot.val();
        let teach = state.filter((item) => {
          console.log(item.Teacher, phoneNo);
          return item.Teacher === phoneNo;
        });
        let learn = state.filter((item, i) => {
          return item.Students.find((student) => {
            return student === phoneNo;
          });
        });
        setLearningInstitutes(learn);
        setTeachingInstitutes(teach);
        setValue(true);
      });
    }
  };
  useEffect(() => {
    if (user.user) {
      setPhoneNo(user.user.phoneNumber);
      getClassData();
    }
  }, [user]);
 


  return (
    <div>

      {user.user ? (
        <Grid container className={classes.divStyle}>
          {JSON.stringify(user.user.phoneNumber)}
          <Grid container className={classes.style}>
            {user.user.photoURL ? (
              <img
                className={classes.avatar}
                alt="userPhoto"
                src={user.user.photoURL}
              />
            ) : (
              <img
                className={classes.avatar}
                alt="userPhoto"
                src={staticProfile}
              />
            )}
            {user.user.displayName ? (
              <React.Fragment>
                <h1 style={{ padding: "10px", marginTop: "1px" }}>
                  Hi {user.user.displayName}!
                </h1>
                <Button onClick={logout}>Logout</Button>
              </React.Fragment>
            ) : (
              <h1>Hi Friend!</h1>
            )}
      <ZentHeader/>

            <Grid container>
              <Grid item sm={6} className={classes.padding}>
                <Link to="/mychat">
                  <ChatHeadingFromHome name="MyChat" />
                </Link>
              </Grid>
              <Grid item sm={6} className={classes.padding}>
                <Link to="/progress">
                  <ChatHeadingFromHome name="Progress" />
                </Link>
              </Grid>
              {value ? (
                <React.Fragment>
                  <Grid item sm={12}>
                    <h1>Student at </h1>
                  </Grid>
                  {learningInstitutes.map((institute, i) => {
                    return (
                      <Grid item sm={6} className={classes.padding}>
                        <Link to={`/class/${institute.id}/001`}>
                          {JSON.stringify(institute.id)}
                          <ChatHeadingFromHome name={institute.Name} />
                        </Link>
                      </Grid>
                    );
                  })}
                  <React.Fragment>
                    {teachingInstitutes ? (
                      <React.Fragment>
                        <Grid item sm={12}>
                          <h1>Teach in</h1>
                        </Grid>
                        {teachingInstitutes.map((institute, i) => {
                          return (
                            <Grid item sm={6} className={classes.padding}>
                              <Link to={`/techview/${institute.id}/001`}>
                                <ChatHeadingFromHome name={institute.Name} />
                              </Link>
                            </Grid>
                          );
                        })}
                      </React.Fragment>
                    ) : (
                      <p>No data found</p>
                    )}
                  </React.Fragment>
                </React.Fragment>
              ) : (
                <p>Loading</p>
              )}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <LandingPage />
      )}
    </div>
  );
};
