import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import "./UplodaAssignmentModal.css";
import Firebase from "firebase";
import { useParams } from "react-router";

const useStyle = makeStyles((theme) => ({
    input: {
        width: "100%",
        padding: 6,
        margin: 5,
    },
    btn: {
        width: "100%",
        padding: 6,
        margin: 5,
    },
}));
export const UplodeAssignmentModal = () => {
    const classes = useStyle();
    let params = useParams();

    return (
        <div>
            <input
                type="text"
                placeholder="StudyMetrialHead"
                id="title"
                className={classes.input}
            />
            <button onClick={handleClick} className={classes.btn}>
                UplodeAssignment
      </button>
        </div>
    );
};
