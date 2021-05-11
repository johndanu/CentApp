import React from "react";
import { ClassNames } from "../StudentViewCenter/ClassNames";

let names = ["CSS", "HTML", "React", "Java", "JavaScript", "PHP"];

export default function TeacherLeftView(props) {
  const classes = props.classes;
  const style = {
    paddingTop: "50px",
    height: "100vh",
  };

  const leftContainer = {
    overflowY: "scroll",
  };

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
    </div>
  );
}
