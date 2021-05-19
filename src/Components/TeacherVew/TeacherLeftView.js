// import { IconButton } from "@material-ui/core";
import React from "react";
import { ClassNames } from "../StudentViewCenter/ClassNames";

import { Link } from "react-router-dom";

export default function TeacherLeftView(props) {
  const classes = props.classes;

  const leftContainer = {
    overflowY: "scroll",
    height: "75.8vh",
  };

  return (
    <div style={leftContainer}>
      {/* <a href="/techview">
        <ClassNames name="Common" />
      </a>
      {/* {JSON.stringify(classes)} */}
      {/* {classes} */}
      {/* <p>{JSON.stringify(classes.classes[0].Class)}</p>  */}
      {classes.classes.map((myclasses) => (
        <React.Fragment>
          {myclasses.teacherno === props.phoneNo ? (
            <Link to={`/techview/${classes.id}/${myclasses.id}`}>
              <ClassNames
                name={classes.Name}
                teacher={myclasses.Class}
                id={myclasses.id}
              />
            </Link>
          ) : (
            <br />
          )}{" "}
        </React.Fragment>
      ))}
    </div>
  );
}
