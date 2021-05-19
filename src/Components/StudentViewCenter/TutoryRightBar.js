import { Divider } from "@material-ui/core";
import React from "react";

import { StudyMaterial } from "../Assignment/StudyMaterial";
import { AssignmentReceived } from "../Assignment/AssignmentReceived";
import { Class } from "../Assignment/Class";
import { useParams } from "react-router";

export const TutoryRightBar = (props) => {
  let params = useParams();
  const Marginspace = {
    margin: "5px",
  };
  const rightContainer = {
    height: "76.1vh",
    paddingLeft: "30px",
    paddingTop: "10px",
    direction: "ltr",
    overflowY: "scroll",
    width: "70.1vw",
    backgroundColor: "white",
    backgroundImage:
      "url(https://i.pinimg.com/originals/ab/ab/60/abab60f06ab52fa7846593e6ae0c9a0b.png)",
  };
  const collection = props.classes;

  const classUpdateCollection = collection.find((item) => {
    return item.id === params.simpleId;
    // console.log(item.id, params.simpleId);
  });

  return (
    <div style={rightContainer}>
      {classUpdateCollection.classupdates.map((classUpdate, i) => {
        if (classUpdate.type === "assignment") {
          return (
            <span>
              <AssignmentReceived classUpdate={classUpdate} />{" "}
              <Divider style={Marginspace} />
            </span>
          );
        } else if (classUpdate.type == "studyMaterial") {
          return (
            <span>
              <StudyMaterial classUpdate={classUpdate} />{" "}
              <Divider style={Marginspace} />
            </span>
          );
        } else if (classUpdate.type == "ClassUpdate") {
          return (
            <span>
              <Class classUpdate={classUpdate} />
              <Divider style={Marginspace} />
            </span>
          );
        }
      })}
    </div>
  );
};
