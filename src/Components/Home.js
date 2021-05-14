import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import { ChatHeadingFromHome } from "./Home/ChatHeadingFromHome";
import { AuthContext } from "../Auth";
import LandingPage from "./LandingPage";
import { Link } from "react-router-dom";

export const Home = () => {
  const divStyle = {
    backgroundColor: "white",
    width: "93vw",
    height: "90vh",
    marginTop: "40px",
    marginLeft: "53px",
  };
  const style = {
    padding: "20px",
    height: "77.5vh",
    margin: "50px",
    overflowY: "scroll",
    width: "172vw",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backgroundImage:
      "url(https://i.pinimg.com/originals/ab/ab/60/abab60f06ab52fa7846593e6ae0c9a0b.png)",
  };
  const padding = {
    padding: "10px",
    marginTop: "1px",
    border: " 1px solid #F2F2F2",
  };

  let LearningInstitutes = [
    {
      name: "UKI Coding School",
      role: "student",
    },
    {
      name: "Choir Team",
      role: "student",
    },
  ];
  let TeachingInstitutes = [
    {
      name: "Sooriyan Tution",
      role: "teacher",
    },
  ];
  const [user, dispatch] = useContext(AuthContext);
  let thisuser = () => {
    if (user) {
      return true;
    }
  };

  return (
    <div>
      {user.user ? (
        <Grid container style={divStyle}>
          <Grid container style={style}>
            <h1 style={{ padding: "10px", marginTop: "1px" }}>
              Hi {user.user.displayName}!
            </h1>
            <Grid container>
              <Grid item sm={6} style={padding}>
                <Link to="/mychat/chat001">
                  <ChatHeadingFromHome name="MyChat" />
                </Link>
              </Grid>
              <Grid item sm={6} style={padding}>
                <Link to="/progress">
                  <ChatHeadingFromHome name="Progress" />
                </Link>
              </Grid>
              <Grid item sm={12}>
                <h1>Student at </h1>
              </Grid>
              {LearningInstitutes.map((institute, i) => {
                return (
                  <Grid item sm={6} style={padding}>
                    <Link to="/class/class001-001">
                      <ChatHeadingFromHome name={institute.name} />
                    </Link>
                  </Grid>
                );
              })}
              <Grid item sm={12}>
                <h1>Teach in</h1>
              </Grid>
              {TeachingInstitutes.map((institute, i) => {
                return (
                  <Grid item sm={6} style={padding}>
                    <Link to="/techview/class001-001">
                      <ChatHeadingFromHome name={institute.name} />
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <LandingPage />
      )}
    </div>
  );
};
