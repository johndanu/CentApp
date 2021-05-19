import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { TutorialName } from "./StudentViewCenter/TutorialName";
import { TutoryLeftBar } from "./StudentViewCenter/TutoryLeftBar";
import { TutoryRightBar } from "./StudentViewCenter/TutoryRightBar";
import { Link, useParams } from "react-router-dom";
import Firebase from "firebase";

export const Classes = () => {
  const params = useParams();
  const [classCollection2, setClassCollection2] = useState([]);
  const [value, setValue] = useState(false);

  const getClassData = () => {
    // console.log("sd===============+=");
    let ref = Firebase.database().ref("/ClassCollection");
    ref.on("value", (snapshot) => {
      const state = snapshot.val();
      let data = state.find((item) => {
        console.log(item.id, "samam", params.id);
        return item.id === params.id;
      });
      setClassCollection2(data);
      console.log(data);
      setValue(true);
    });
  };
  useEffect(() => {
    getClassData();
  }, []);
  const style = {
    paddingTop: "1px",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    height: "85vh",
    margin: "50px",
    width: "93.5vw",
    backgroundColor: "#F2F2F2",
  };

  const leftContainer = {
    overflowY: "scroll",
  };

  return (
    <div style={style}>
      {value ? (
        <React.Fragment>
          <Grid container>
            <Grid item xs={3}>
              <Link to="/">
                <TutorialName institute={classCollection2.Name} />
              </Link>
            </Grid>
            <Grid item xs={3}>
              <h3>Class</h3>
            </Grid>
            {/* <Grid item xs={3}>
          <a href="/clspersonal">
            <h3>Personal</h3>
          </a>
        </Grid> */}
            {/* <Grid item xs={3}>
          <h3>Group</h3>
        </Grid> */}
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              <TutoryLeftBar classes={classCollection2} />
            </Grid>
            <Grid item xs={9}>
              <TutoryRightBar classes={classCollection2.classes} />
            </Grid>
          </Grid>
        </React.Fragment>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
