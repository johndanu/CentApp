import { Grid } from "@material-ui/core";
import React from "react";
import './StudyMetrialModal.css';

export const StudyMetrialModal = ({ show, close }) => {
    return (
        <div style={{ borderRadius: "10px" }} className="modalWrapper"
            style={{
                transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}
        >
            <div className="modalHeader">
                <p>Assignment</p>
                <span onClick={close} className="close-modal-btn">x</span>
            </div>
            <div className="modalContent">
                <div className="modalBody">
                    <form>
                        <Grid>
                            <input type="text" placeholder="StudyMetrialHead" />
                        </Grid>
                        <Grid>
                            <input type="text" placeholder="StudyMetrial" />
                        </Grid>
                    </form>
                </div>
                <div className="modalFooter">
                    <button onClick={close} className="btn-cancel">Add</button>
                </div>
            </div>
        </div>
    )
};