import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
 import Settings from '../../../images/icons/settings.svg';
import Bell from '../../../images/icons/bell.svg';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Logo from "../../../images/Subtract.svg"

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
 
  }));


  export default function ZentHeader  (props){
 
    const classes = useStyles();

  return (
    <div>
        <div>
        <img src={Logo}/>
        <h2>
        Zent.app
        </h2>
        </div>
        <div>
            <div>
            <InputBase
        className={classes.input}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
     
            </div>
            <div><img src={Settings}/></div>
            <div><img src={Bell}/></div>
            <div><Avatar>H</Avatar></div>
        </div>
    </div>
  );
};
