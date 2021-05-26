import React from "react";
// import { ChatPerson } from "../MyChat/ChatPerson";
import { ClassNames } from "./ClassNames";
// import { ClassNames } from "./ClassNames";
import { Link } from "react-router-dom";

export const TutoryLeftBar = (props) => {
  const leftContainer = {
    overflowY: "scroll",
    height: "75.8vh",
  };

  return (
    <div style={leftContainer}>
      {/* {JSON.stringify(props.classes.classes[0].id)} */}
      {props.classes.classes.map((myclasses) => (
        <React.Fragment>
          <Link to={`/class/${props.classes.id}/${myclasses.id}`}>
            <ClassNames
              name={myclasses.Class}
              teacher={myclasses.teacher}
              id={myclasses.id}
            />
          </Link>
        </React.Fragment>
      ))}
      {/* {props.classes} */}
    </div>
  );
};
