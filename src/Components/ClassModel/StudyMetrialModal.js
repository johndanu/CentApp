import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import "./StudyMetrialModal.css";
import Firebase from "firebase";

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
export const StudyMetrialModal = ({ close, length }) => {
  const classes = useStyle();

  const handleClick = () => {
    let id = window.location.href.split("/");
    id = id[id.length - 1].split("");
    id = id[id.length - 1];
    id = parseInt(id) - 1;
    let link = "/ClassCollection/0/classes/0/classupdates/" + length;
    let ref = Firebase.database().ref(link);
    let Assignment = {
      link: document.getElementById("link").value,
      title: document.getElementById("title").value,
      type: "studyMaterial",
    };

    if (Assignment.link === "" || Assignment.title === "") {
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
        placeholder="StudyMetrialHead"
        id="title"
        className={classes.input}
      />

      <input
        type="text"
        placeholder="StudyMetrial"
        id="link"
        className={classes.input}
      />

      <button onClick={handleClick} className={classes.btn}>
        Add
      </button>
    </div>
  );
};
