import { Grid } from "@material-ui/core";
import React from "react";
import "./AssignmentModal.css";
import Firebase from "firebase";

export const AssignmentModal = ({ show, close, length }) => {
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
    let id = window.location.href.split("/");
    id = id[id.length - 1].split("");
    id = id[id.length - 1];
    id = parseInt(id) - 1;
    let link = "/ClassCollection/0/classes/0/classupdates/" + length;
    let ref = Firebase.database().ref(link);
    let Assignment = {
      description: document.getElementById("description").value,
      duedate: document.getElementById("duedate").value,
      title: document.getElementById("title").value,
    };
    ref.set(Assignment);
    console.log(Assignment);
    close();
  };

  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? "translateY(5px)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
        borderRadius: "10px",
      }}
    >
      <div onClick={close} className="modal-header">
        <h4>Assignment</h4>
        <span className="close-modal-btn">
          <p>assignDate</p>
        </span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <form>
            <Grid style={margin}>
              <input type="text" id="title" placeholder="Assignment Title" />
            </Grid>
            <Grid style={margin}>
              <input
                type="text"
                id="description"
                placeholder="Assignment Description"
              />
            </Grid>
            <Grid style={margin}>
              <input type="DateAndTime" placeholder="DueDate" id="duedate" />
            </Grid>
            <Grid style={TextareaMargin}>
              <textarea placeholder="Message" />
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
