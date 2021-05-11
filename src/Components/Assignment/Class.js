import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Grid } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PlaceIcon from "@material-ui/icons/Place";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

export const Class = (props) => {
  const styleReceiver = {
    padding: "10px",
    // border: '1px outset #1C6EA4',
    borderRadius: "0px 40px 40px 35px",
    minWidth: "400px",
    float: "left",
    color: "#75726c",
    backgroundColor: "#b0a48f",
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
        {/* {JSON.stringify(props.classUpdate)} */}
        <span style={styleReceiver}>
          <h3>{props.classUpdate.classOn}</h3>
          <div>
            <small>{props.classUpdate.dateAndTime}</small>
          </div>

          {props.classUpdate.place == "online" ? (
            <a href="https://meet.google.com/ffd-fzss-kty" target="blank">
              {props.classUpdate.venue}
              <IconButton>
                <OpenInNewIcon />
              </IconButton>
            </a>
          ) : (
            <p>
              <a href="https://goo.gl/maps/wv9CPkK6dKhtJQZt6" target="blank">
                <IconButton>
                  <PlaceIcon />
                </IconButton>
              </a>
              {props.classUpdate.venue}
            </p>
          )}
        </span>
      </Grid>
    </Grid>
  );
};
