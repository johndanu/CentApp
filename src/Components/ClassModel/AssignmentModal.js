import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import "./AssignmentModal.css";
import Firebase from "firebase";
import { useParams } from "react-router";

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
export const AssignmentModal = ({ length }) => {
  const classes = useStyle();
  let params = useParams();

  const margin = {
    // marginTop: "",
    border: "none",
    padding: "10px",
  };

  const TextareaMargin = {
    // marginTop: "2vh",
    padding: "10px",
  };

  const handleClick = () => {
    let iId =
      parseInt(params.instituteId.charAt(params.instituteId.length - 1)) - 1;
    console.log(iId);
    let cId = parseInt(params.classId.charAt(params.classId.length - 1)) - 1;
    let link = `/ClassCollection/${iId}/classes/${cId}/classupdates/` + length;
    let ref = Firebase.database().ref(link);
    let Assignment = {
      description: document.getElementById("description").value,
      duedate: document.getElementById("duedate").value,
      title: document.getElementById("title").value,
      type: "assignment",
    };
    if (
      Assignment.venue === "" ||
      Assignment.dateAndTime === "" ||
      Assignment.classOn === ""
    ) {
      alert("please fill all the feilds");
    } else {
      ref.set(Assignment);
      console.log(Assignment);
    }
  };

  return (
    <div>
      <Grid style={margin}>
        <input
          type="text"
          id="title"
          placeholder="Assignment Title"
          className={classes.input}
        />
      </Grid>
      <Grid style={margin}>
        <input
          type="text"
          id="description"
          placeholder="Assignment Description"
          className={classes.input}
        />
      </Grid>
      <Grid style={margin}>
        <input
          type="DateAndTime"
          placeholder="DueDate"
          id="duedate"
          className={classes.input}
        />
      </Grid>

      <button onClick={handleClick} className={classes.input}>
        Add
      </button>
    </div>
  );
};
