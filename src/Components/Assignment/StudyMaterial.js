import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Grid } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Link } from "@material-ui/icons";
export const StudyMaterial = (props) => {
  const styleReceiver = {
    padding: "10px",
    // border: '1px outset #1C6EA4',
    borderRadius: "0px 40px 40px 35px",
    minWidth: "400px",
    float: "left",
    backgroundColor: "#dbceb6",
    border: " 1px solid #756D5E",
    color: "black",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: " blur(4px)",
    textAlign: "center",
  };
  const threeDots = {
    // width:'30px',
    // backgroundColor:'pink',
    // borderRadius:'30px 30px',
    // border:'1px solid red'
    marginLeft: "-14px",
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const textStyle = {
    textAlign: "center",
  };

  return (
    <Grid container>
      <Grid>
        <span style={styleReceiver}>
          <p>{props.classUpdate.title}</p>
          <p>
            {props.classUpdate.link}{" "}
            <IconButton>
              <Link />
            </IconButton>
            <IconButton>
              <GetAppIcon />
            </IconButton>
          </p>
        </span>
      </Grid>
    </Grid>
  );
};
