import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

export const TutorialName = (props) => {
  const style = {
    backgroundColor: "DodgerBlue",
    padding: "15px",
  };

  const padding = {
    padding: "15px",
  };

  return (
    <div style={style.divStyle}>
      <Grid container>
        <Grid item sm={3} style={padding}>
          <Avatar
            alt="Cent"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT2EgncLjz34RAF0hJBmctuSybA3luujCggw&usqp=CAU"
          />
        </Grid>
        <Grid item sm={9} style={padding}>
          {props.institute ? <h2>{props.institute}</h2> : <h2>Institute</h2>}
        </Grid>
      </Grid>
    </div>
  );
};
