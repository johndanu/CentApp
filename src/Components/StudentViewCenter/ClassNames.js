import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { useHistory, Link, useRouteMatch } from "react-router-dom";

export const ClassNames = (props) => {
  const spacing = {
    padding: "15px",
  };
  const card = {
    padding: "1px",
    backgroundColor: "#D8D1C9",
    marginTop: "2px",
    background: "#D8D1C9",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: " blur(4px)",
    border: " 1px solid rgba(255, 255, 255, 0.18)",
  };
  //   const History = useHistory();
  const match = useRouteMatch();
  //   const
  const handleClick = () => {
    console.log("=========");
    // History.push("/asdasd");
  };

  return (
    <div>
      <Grid container style={card}>
        <Grid item sm={3} style={spacing}>
          <Avatar
            alt="Name"
            src="https://www.attitudestatus.org/wp-content/uploads/2020/07/dp-whatsapp-9-300x300.jpg"
          />
        </Grid>
        <Grid item sm={6}>
          <h4 onClick={handleClick}>
            {props.name}sas
            <br />
            <small>{props.teacher}</small>
          </h4>
        </Grid>
      </Grid>
    </div>
  );
};
