import { Grid } from "@material-ui/core";
import React from "react";
import './ClassUpdateModal.css';

export const ClassUpdateModal = ({ show, close }) => {
    return (
        <div style={{ borderRadius: "10px" }} className="modal-wrapper"
            style={{
                transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}
        >
            <div className="modal-header">
                <p>Assignment</p>
                <span onClick={close} className="close-modal-btn">x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <form>
                        <Grid>
                            <input type="text" placeholder="ClassTopic" />
                        </Grid>
                        <Grid>
                            <input type="text" placeholder="TeacherName" />
                        </Grid>
                        <Grid>
                            <input type="DateAndTime" placeholder="DateAndTime" />
                        </Grid>
                        <Grid>
                            <input type="text" placeholder="ZoomLink" />
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