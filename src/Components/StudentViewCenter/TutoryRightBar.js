import { Divider } from "@material-ui/core";
import React from "react";

import { StudyMaterial } from "../Assignment/StudyMaterial";
import { AssignmentReceived } from "../Assignment/AssignmentReceived";
import { Class } from "../Assignment/Class";

export const TutoryRightBar = (props) => {
  const Marginspace = {
    margin: "5px",
  };

  const rightContainer = {
    height: "76vh",
    paddingLeft: "30px",
    paddingTop: "10px",
    // transform: 'rotateY(180deg)',
    direction: "ltr",
    overflowY: "auto",
    width: "135vh",
    backgroundColor: "white",
    backgroundImage:
      "url(https://i.pinimg.com/originals/ab/ab/60/abab60f06ab52fa7846593e6ae0c9a0b.png)",
  };
  const collection = props.classes;

  let id = window.location.href.split("/");
  id = id[id.length - 1];
  console.log(id);
  const classUpdateCollection = collection.find((item) => {
    if (item.id == id) {
      return item;
    }
  });
  return (
    <div style={rightContainer}>
      {"hello"}
      {classUpdateCollection.classupdates.map((classUpdate, i) => {
        if (classUpdate.type == "assignment") {
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
