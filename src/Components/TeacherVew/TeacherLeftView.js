import { IconButton } from "@material-ui/core";
import React from "react";
import { ClassNames } from "../StudentViewCenter/ClassNames";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { AssignmentInd } from "@material-ui/icons";
import LinkIcon from "@material-ui/icons/Link";
import PlaceIcon from "@material-ui/icons/Place";

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
}));

export default function TeacherLeftView(props) {
  const classes = props.classes;
  const style = {
    paddingTop: "50px",
    height: "100vh",
  };

  const leftContainer = {
    overflowY: "scroll",
    height:'76vh'
  };
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const styleclass = useStyles();
  const body = (
    <div style={modalStyle} className={styleclass.paper}>
      <h2 id="mytitle">Create a new</h2>
      <p id="simple-modal-description" className={styleclass.text}>
        <IconButton>
          <AssignmentInd fontSize="large" />
        </IconButton>
        <IconButton>
          <LinkIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <PlaceIcon fontSize="large" />
        </IconButton>
      </p>
      {/* <TeacherLeftView /> */}
    </div>
  );
  return (
    <div style={leftContainer}>
      {/* <a href="/techview">
                <ClassNames name="Common"/>
            </a> */}
      {/* {JSON.stringify(classes)} */}
      {classes.classes.map((myclasses) => (
        <a href={"/techview/" + myclasses.id}>
          {myclasses.teacherno == "0774766597" ? (
            <ClassNames
              name={classes.Name}
              teacher={myclasses.Class}
              id={myclasses.id}
            />
          ) : (
            <br />
          )}
        </a>
      ))}
      <IconButton onClick={handleOpen}>
        <AddCircleIcon />
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
