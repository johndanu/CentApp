import { IconButton } from "@material-ui/core";
import React from "react";
import { ClassNames } from "../StudentViewCenter/ClassNames";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ClassAddButtonModel from "./ClassAddButtonModel";

export default function TeacherLeftView(props) {
  const classes = props.classes;
  const style = {
    paddingTop: "50px",
    height: "100vh",
  };

  const leftContainer = {
    overflowY: "scroll",
    height: "75.8vh",
  };

  return (
    <div style={leftContainer}>
      {/* <a href="/techview">
                <ClassNames name="Common"/>
            </a> */}
      {/* {JSON.stringify(classes)} */}
      {classes.classes.map((myclasses) => (
        <Link to={"/techview/" + myclasses.id}>
          {myclasses.teacherno == "0774766597" ? (
            <ClassNames
              name={classes.Name}
              teacher={myclasses.Class}
              id={myclasses.id}
            />
          ) : (
            <br />
          )}
        </Link>
      ))}
    </div>
  );
}
