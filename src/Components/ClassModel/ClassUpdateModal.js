import { Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import "./ClassUpdateModal.css";
import Firebase from "firebase";
import { useParams } from "react-router";

// import { Assignment } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  inputBox: {
    width: "100%",
    padding: 6,
    margin: 6,
  },
}));
export const ClassUpdateModal = ({ show, close, length }) => {
  const classes = useStyle();
  let params = useParams();
  const handleClick = () => {
    let iId =
      parseInt(params.instituteId.charAt(params.instituteId.length - 1)) - 1;
    console.log(iId);
    let cId = parseInt(params.classId.charAt(params.classId.length - 1)) - 1;
    let link = `/ClassCollection/${iId}/classes/${cId}/classupdates/` + length;
    let ref = Firebase.database().ref(link);
    let Assignment = {
      dateAndTime: document.getElementById("date").value,
      classOn: document.getElementById("classOn").value,
      type: "ClassUpdate",
      place: document.getElementById("place").value,
      venue: document.getElementById("venue").value,
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
      <input
        type="text"
        placeholder="ClassTopic"
        id="classOn"
        className={classes.inputBox}
      />

      <input
        type="DateAndTime"
        placeholder="DateAndTime"
        id="date"
        className={classes.inputBox}
      />

      <select name="cars" id="place" className={classes.inputBox}>
        <option value="online">Online</option>
        <option value="offline">Offline</option>
      </select>

      <input
        type="text"
        placeholder="venue"
        id="venue"
        className={classes.inputBox}
      />

      <button onClick={handleClick} className={classes.inputBox}>
        Add
      </button>
    </div>
  );
};
