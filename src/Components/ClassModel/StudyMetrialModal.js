import { Grid } from "@material-ui/core";
import React from "react";
import "./StudyMetrialModal.css";
import Firebase from "firebase";

export const StudyMetrialModal = ({ show, close, length }) => {
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
    close();
  };

  return (
    <div
      className="modalWrapper"
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
        borderRadius: "10px",
      }}
    >
      <div className="modalHeader">
        <p>Assignment</p>
        <span onClick={close} className="close-modal-btn">
          x
        </span>
      </div>
      <div className="modalContent">
        <div className="modalBody">
          <form>
            <Grid>
              <input type="text" placeholder="StudyMetrialHead" id="title" />
            </Grid>
            <Grid>
              <input type="text" placeholder="StudyMetrial" id="link" />
            </Grid>
          </form>
        </div>
        <div className="modalFooter">
          <button onClick={handleClick} className="btn-cancel">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
