import { Grid } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
// import { ChatTypingSpace } from "./MyChat/ChatTypingSpace";
import { Link, useParams } from "react-router-dom";
import TeacherLeftView from "./TeacherVew/TeacherLeftView";
import TeachingPlace from "./TeacherVew/TeachingPlace";
import { TeacherRightBar } from "./TeacherVew/TecherRightBar";
import Firebase from "firebase";
import { AuthContext } from "../Auth";
import LandingPage from "./LandingPage";

export default function TeacherView(props) {
  let params = useParams();
  const style = {
    paddingTop: "1px",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    height: "85vh",
    margin: "50px",
    width: "93vw",
    backgroundColor: "#F2F2F2",
  };
  const [user] = useContext(AuthContext);
  const [classCollection2, setClassCollection2] = useState([]);

  const [value, setValue] = useState(false);

  const getUserData = () => {
    // console.log("sd===============+=");
    let ref = Firebase.database().ref("/ClassCollection");
    ref.on("value", (snapshot) => {
      let state = snapshot.val();
      state = state.find((item) => {
        console.log(item.id);
        return item.id === params.instituteId;
      });
      console.log("DATA SAVED", state);
      setClassCollection2(state);
      setValue(true);
    });
  };

  useEffect(() => {
    getUserData();
  }, [props]);

  return (
    <div style={style}>
      {user.user ? (
        value ? (
          <span>
            <Grid container>
              <Grid item xs={3}>
                <Link to="/">
                  <TeachingPlace name={classCollection2.Name} />
                  {/* <p>{classCollection2}</p> */}
                </Link>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item sm={3}>
                <TeacherLeftView
                  classes={classCollection2}
                  phoneNo={props.phoneNo}
                />
              </Grid>
              <Grid item sm={9}>
                <Grid container>
                  <TeacherRightBar classes={classCollection2} />
                </Grid>
              </Grid>
            </Grid>
          </span>
        ) : (
          <div>Loading</div>
        )
      ) : (
        <LandingPage />
      )}
    </div>
  );
}
