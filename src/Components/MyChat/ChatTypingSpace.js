import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@material-ui/core'
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
const wrapperDiv = {
    width: '100vh',
    padding: '10px',
}
const styleTypingSpace = {
    backgroundColor: 'red',
    position: 'fixed',
    bottom: '10px',
    right: '125px',
    height: '50px',
    width: '70vw',
    padding: '5px',
    marginBottom: '3.9vw',
    marginRight: '-7.5vh',
    border: " 1px solid rgba(255, 255, 255, 0.18)",
}
const styleMsgBox = {
    backgroundColor: '#D8D1C9',
    height: '40px',
    marginBottom: "5vh",
    width: '95%',
    WebkitBackdropFilter: " blur(4px)",
    border: " 1px solid rgba(255, 255, 255, 0.18)",
    display:"flex"
}

const buttonStle ={
    display:"flex"

}

export class ChatTypingSpace extends Component {

    render() {

        // MessageSend = () => {
        //    Console.log("send msg");
        // };

        return (
            <div style={styleTypingSpace}>
                <form>
                    <input type='text' placeholder='Enter your message..' style={styleMsgBox} />
                   <IconButton style={buttonStle}>
                        <SendIcon/>
                   </IconButton>
                </form>
            </div>
        )
    }
}