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

export default function ClassAddButtonModel() {
  const [show, SetShow] = useState(false);
  const closeModalHandler = () => SetShow(false);

  {/* <div>
          {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
          <IconButton onClick={() => SetShow(true)} className="btn-openModal">
            <AssignmentInd />
          </IconButton>
          <AssignmentModal show={show} close={closeModalHandler} />
        </div> */}


  {/* <div>
          {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
          <IconButton onClick={() => SetShow(true)} className="btn-openModal">
            <LinkIcon />
          </IconButton>
          <StudyMetrialModal show={show} close={closeModalHandler} />
        </div> */}

  {/* <div>
          {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
          <IconButton onClick={() => SetShow(true)} className="btn-openModal">
            <PlaceIcon />
          </IconButton>
          <ClassUpdateModal show={show} close={closeModalHandler} />
        </div> */}

  return (
    <div style={position}>
      <IconButton>
        <AssignmentInd fontSize="large" />
      </IconButton>
      <IconButton>
        <LinkIcon fontSize="large" />
      </IconButton>
      <IconButton>
        <PlaceIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
