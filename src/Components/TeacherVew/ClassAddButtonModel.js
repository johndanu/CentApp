import React from "react";
// import Modal from "@material-ui/core/Modal";
import { IconButton, makeStyles } from "@material-ui/core";
// import AddCircleIcon from "@material-ui/icons/AddCircle";
import { AssignmentInd } from "@material-ui/icons";
import LinkIcon from "@material-ui/icons/Link";
import PlaceIcon from "@material-ui/icons/Place";
// import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { StudyMetrialModal } from "../ClassModel/StudyMetrialModal";
import { ClassUpdateModal } from "../ClassModel/ClassUpdateModal";
import { AssignmentModal } from "../ClassModel/AssignmentModal";
import Modal from "@material-ui/core/Modal";

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
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export default function ClassAddButtonModel(props) {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };
  const body1 = (
    <div style={modalStyle} className={classes.paper}>
      <StudyMetrialModal length={props.length} />
    </div>
  );
  const body2 = (
    <div style={modalStyle} className={classes.paper}>
      <ClassUpdateModal length={props.length} />
    </div>
  );
  const body3 = (
    <div style={modalStyle} className={classes.paper}>
      <AssignmentModal length={props.length} />
    </div>
  );
  return (
    // <div>
    <div style={{marginLeft:"55.3vw"}}>
      <IconButton onClick={handleOpen1}>
        {" "}
        <LinkIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={handleOpen2}>
        <PlaceIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={handleOpen3}>
        <AssignmentInd fontSize="large" />
      </IconButton>

      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="simple-modal-title1"
        aria-describedby="simple-modal-description1"
      >
        {body1}
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="simple-modal-title2"
        aria-describedby="simple-modal-description2"
      >
        {body2}
      </Modal>
      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="simple-modal-title3"
        aria-describedby="simple-modal-description3"
      >
        {body3}
      </Modal>
      {/* </div>
      {show ? (
        <div onClick={closeModalHandler} className="back-drop"></div>
      ) : null}
      <IconButton onClick={() => SetShow(true)} className="btn-openModal">
        <AssignmentInd />
      </IconButton>
      
      <IconButton>
        <PlaceIcon fontSize="large" />
      </IconButton>
      
      
      <StudyMetrialModal
        show={show}
        length={props.length}
        close={closeModalHandler}
      /> */}
    </div>
  );
}
