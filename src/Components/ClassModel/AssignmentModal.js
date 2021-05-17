import { Grid } from "@material-ui/core";
import React from "react";
import './AssignmentModal.css';

export const AssignmentModal = ({ show, close }) => {
    const margin = {
        marginTop: "2vh",
        border:"none",
        padding:"10px",
    }

    const TextareaMargin = {
        marginTop: "2vh",
        padding:"10px",

    }
    return (
        <div style={{ borderRadius: "10px" }} className="modal-wrapper"
            style={{
                transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}
        >
            <div onClick={close} className="modal-header">
                <h4>Assignment</h4>
                <span className="close-modal-btn">
                    <p>assignDate</p>
                </span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <form>
                        <Grid style={margin}>
                            <input type="text" placeholder="Assignment Head" />
                        </Grid>
                        <Grid style={margin}>
                            <input type="text" placeholder="AssignmentModel" />
                        </Grid>
                        <Grid style={margin}>
                            <input type="DateAndTime" placeholder="DueDate" />
                        </Grid>
                        <Grid style={TextareaMargin}>
                                <textarea placeholder="Message" />
                        </Grid>
                    </form>
                </div>
                <div className="modal-footer">
                    <button onClick={close} className="btn-cancel">Add</button>
                </div>
            </div>
        </div>
    )
};