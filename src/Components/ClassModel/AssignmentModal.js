import { Grid } from "@material-ui/core";
import React from "react";
import './AssignmentModal.css';

export const AssignmentModal = ({ show, close }) => {
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
                        <Grid>
                            <input type="text" placeholder="Assignment Head" />
                        </Grid>
                        <Grid>
                            <input type="text" placeholder="AssignmentModel" />
                        </Grid>
                        <Grid>
                            <input type="DateAndTime" placeholder="DueDate" />
                        </Grid>
                        <Grid>
                            <input type="text" placeholder="Message" />
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