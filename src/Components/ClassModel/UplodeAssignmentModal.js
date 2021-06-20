import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import "./UplodaAssignmentModal.css";

const useStyle = makeStyles((theme) => ({
  input: {
    width: "100%",
    padding: 6,
    margin: 5,
  },
  btn: {
    width: "100%",
    padding: 6,
    margin: 5,
  },
}));
export const UplodeAssignmentModal = () => {
  const classes = useStyle();

  return (
    <div>
      <input
        type="text"
        placeholder="StudyMetrialHead"
        id="title"
        className={classes.input}
      />
      <button className={classes.btn}>Uplode Assignment</button>
    </div>
  );
};
