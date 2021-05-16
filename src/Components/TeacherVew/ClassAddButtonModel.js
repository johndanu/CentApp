import React from "react";
import Modal from "@material-ui/core/Modal";
import { IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { AssignmentInd } from "@material-ui/icons";
import LinkIcon from "@material-ui/icons/Link";
import PlaceIcon from "@material-ui/icons/Place";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from 'react';
import { StudyMetrialModal } from "../ClassModel/StudyMetrialModal";
import { ClassUpdateModal } from "../ClassModel/ClassUpdateModal";
import { AssignmentModal } from "../ClassModel/AssignmentModal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles(() => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: 5,
    padding: 10,
    textAlign: "center",
  },
  text: {
    textAlign: "center",
  },
  style: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
  },
}));

export default function ClassAddButtonModel() {
  const [show, SetShow] = useState(false);
  const closeModalHandler = () => SetShow(false);


  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const styleclass = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div style={modalStyle} className={styleclass.paper}>
      <h2 id="mytitle">Create a new</h2>
      <p id="simple-modal-description" className={styleclass.text}>

        {/* <div>
          {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
          <IconButton onClick={() => SetShow(true)} className="btn-openModal">
            <AssignmentInd />
          </IconButton>
          <AssignmentModal show={show} close={closeModalHandler} />
        </div> */}

        <IconButton>
          <AssignmentInd fontSize="large" />
        </IconButton>

        {/* <div>
          {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
          <IconButton onClick={() => SetShow(true)} className="btn-openModal">
            <LinkIcon />
          </IconButton>
          <StudyMetrialModal show={show} close={closeModalHandler} />
        </div> */}

        <IconButton>
          <LinkIcon fontSize="large" />
        </IconButton>

        {/* <div>
          {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
          <IconButton onClick={() => SetShow(true)} className="btn-openModal">
            <PlaceIcon />
          </IconButton>
          <ClassUpdateModal show={show} close={closeModalHandler} />
        </div> */}

        <IconButton>
          <PlaceIcon fontSize="large" />
        </IconButton>

      </p>
      {/* <TeacherLeftView /> */}
    </div>
  );

  const position = {
    marginBottom: "6vh",
    marginRight: "7.3vh"
  }

  return (
    <div >
      <IconButton onClick={handleOpen} className={styleclass.style} style={position}>
        <AddCircleIcon fontSize="large" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="mytitle"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
