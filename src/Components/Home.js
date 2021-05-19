import React, { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Firebase from "firebase";
import { ChatHeadingFromHome } from "./Home/ChatHeadingFromHome";
import { AuthContext } from "../Auth";
import LandingPage from "./LandingPage";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  avatar: {
    border: "5px solid white ",
    width: "50px",
    height: "50px",
  },
});
export const Home = (props) => {
  const classes = useStyle();

  const [learningInstitutes, setLearningInstitutes] = useState([]);
  const [teachingInstitutes, setTeachingInstitutes] = useState([]);
  const [value, setValue] = useState(false);

  const getClassData = () => {
    // console.log("sd===============+=");
    let ref = Firebase.database().ref("/ClassCollection");
    ref.on("value", (snapshot) => {
      const state = snapshot.val();
      let teach = state.filter((item) => {
        return item.Teacher === props.phoneNo;
      });
      let learn = state.filter((item, i) => {
        console.log(item.id, i);
        return item.Students.find((student) => {
          return student === props.phoneNo;
        });
      });
      console.log(teach, "learn");
      setLearningInstitutes(learn);
      setTeachingInstitutes(teach);
      setValue(true);
    });
  };
  useEffect(() => {
    getClassData();
  }, []);
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

  const [user] = useContext(AuthContext);

  return (
    <div>
      {user.user ? (
        <Grid container style={divStyle}>
          <Grid container style={style}>
            <img
              className={classes.avatar}
              alt="userPhoto"
              src={user.user.photoURL}
            />
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
              {value ? (
                <React.Fragment>
                  <Grid item sm={12}>
                    <h1>Student at </h1>
                  </Grid>
                  {learningInstitutes.map((institute, i) => {
                    return (
                      <Grid item sm={6} style={padding}>
                        <Link to={`/class/${institute.id}/001`}>
                          {JSON.stringify(institute.id)}
                          <ChatHeadingFromHome name={institute.Name} />
                        </Link>
                      </Grid>
                    );
                  })}
                  <Grid item sm={12}>
                    <h1>Teach in</h1>
                  </Grid>
                  {teachingInstitutes.map((institute, i) => {
                    return (
                      <Grid item sm={6} style={padding}>
                        <Link to={`/techview/${institute.id}/001`}>
                          <ChatHeadingFromHome name={institute.Name} />
                        </Link>
                      </Grid>
                    );
                  })}
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
