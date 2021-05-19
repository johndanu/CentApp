import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

// const useStyles = makeStyles((theme) => ({
//     avatrStyle:{
//         width:theme.spacing(7),
//         height:theme.spacing(7)
//     }
// }))
export const CentLogo = (props) => {
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
          <Avatar alt="Cent" src={props.url} />
        </Grid>
        <Grid item sm={9} style={padding}>
          <h2>Zent</h2>
        </Grid>
      </Grid>
    </div>
  );
};
