import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import "./ClassUpdateModal.css";
import Firebase from "firebase";
// import { Assignment } from "@material-ui/icons";

export const ClassUpdateModal = ({ show, close, length }) => {
  const handleClick = () => {
    let id = window.location.href.split("/");
    id = id[id.length - 1].split("");
    id = id[id.length - 1];
    id = parseInt(id) - 1;
    let link = "/ClassCollection/0/classes/0/classupdates/" + length;
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
    close();
  };

  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
        borderRadius: "10px",
      }}
    >
      <div className="modal-header">
        <p>Assignment</p>
        <span onClick={close} className="close-modal-btn">
          x
        </span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <form>
            <Grid>
              <input type="text" placeholder="ClassTopic" id="classOn" />
            </Grid>

            <Grid>
              <input type="DateAndTime" placeholder="DateAndTime" id="date" />
            </Grid>
            <Grid>
              <select name="cars" id="place">
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </Grid>
            <Grid>
              <input type="text" placeholder="venue" id="venue" />
            </Grid>
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={handleClick} className="btn-cancel">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
