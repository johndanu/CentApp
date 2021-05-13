import React from "react";
import { ChatPerson } from "../MyChat/ChatPerson";
import { ClassNames } from "./ClassNames";
// import { ClassNames } from "./ClassNames";
import { Link } from "react-router-dom";

export const TutoryLeftBar = (props) => {
  const leftContainer = {
    overflowY: "scroll",
    height: "76vh",
  };

  let names = ["CSS", "HTML", "React", "Java"];
  let teachers = ["Danu", "Angel", "Amali", "tinbal"];

  return (
    <div style={leftContainer}>
      {props.classes.map((classes) => (
        <Link to={"/class/" + classes.id}>
          <ClassNames
            name={classes.Class}
            teacher={classes.teacher}
            id={classes.id}
          />
        </Link>
      ))}
      {/* {props.classes} */}
    </div>
  );
};
