import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { MyChatLeftBar } from "./MyChat/MyChatLeftBar";
import { MyChatRightBar } from "./MyChat/MyChatRightBar";
import { CentLogo } from "./MyChat/CentLogo";
import { ChatHeading } from "./MyChat/ChatHeading";
import { BrowserRouter as Router, Link } from "react-router-dom";
import firebaseApp from "firebase";
// import axios from 'axios'


export const MyChat = () => {
  var style = {
    paddingTop: "1px",
    height: "85vh",
    margin: "50px",
    backgroundColor: "#F2F2F2",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  };

  // var containerStyle = {
  //   backgroundColor: "white",
  // }
  // const [ChatCollections, setChatCollections] = useState([
  // {
  //   id: "",
  //   type: "",
  //   member: [],
  //   chats: [],
  // },
  // ]);

  // const getUserData = () => {
  //   console.log("sd===============+=");
  //   let ref = firebaseApp.database().ref("/PersonalChatCollection");
  //   ref.on("value", (snapshot) => {
  //     const state = snapshot.val();
  //     console.log("DATA SAVED", state);
  //     console.log("DATA SAVED", state);
  //     setChatCollections(state);
  //   });
  // };

  
 var [userData, setUserData] = useState({})
  useEffect(() => {
    firebaseApp.child().on('value', snapshot => {
      if(snapshot.val()!= null)
      setUserData({
        ...snapshot.val()
      })
      else
      setUserData({})
    })
  }, [])


  // useEffect(() => {
  //   getUserData();
  //   console.log("chat22======my ");
  // }, []);
  // console.log(ChatCollections, "chat");
  const ChatCollections = [
    {
      id: "chat001",
      type: "personal",
      members: ["0775647873", "0774766597"],
      chats: [
        {
          id: "message001",
          sender: "0774766597",
          message: "Hi Iam Abi",
        },
        {
          id: "message002",
          sender: "0775647873",
          message: "Hello Abi",
        },
        {
          id: "message003",
          sender: "0774766597",
          message: "how can i help you",
        },
        {
          id: "message001",
          sender: "0775647873",
          message: "May I call you tommoroww",
        },
      ],
    },
    {
      id: "chat002",
      type: "personal",
      members: ["0774548725", "0774766597"],
      chats: [
        {
          id: "message001",
          sender: "0774766597",
          message: "Hi Iam Abi",
        },
        {
          id: "message002",
          sender: "0774548725",
          message: "Hello Abi",
        },
        {
          id: "message003",
          sender: "0774548725",
          message: "how can i help you",
        },
        {
          id: "message001",
          sender: "0774766597",
          message: "where can I go for dinner",
        },
      ],
    },
    {
      id: "chat003",
      type: "personal",
      members: ["0774766597", "0776858489"],
      chats: [
        {
          id: "message001",
          sender: "0774766597",
          message: "Hi Iam Abi",
        },
        {
          id: "message002",
          sender: "0776858489",
          message: "Hello Abi",
        },
        {
          id: "message003",
          sender: "0774766597",
          message: "how can i help you",
        },
        {
          id: "message001",
          sender: "0776858489",
          message: "I dont need any help",
        },
      ],
    },
  ];
  // var [ChatCollections, setChatCollections] = useState([])

  //  useEffect(()=>{
  //    fetch(`https://cent-app-uki-default-rtdb.firebaseio.com/PersonalChatCollection${id}`)
  //  },[id])

  //  useEffect(()=>{
  //   axios.get('https://cent-app-uki-default-rtdb.firebaseio.com/PersonalChatCollection')
  //   .then(res=> {
  //     console.log(res)
  //   })
  //   .catch(err=>{
  //     console.log(err)
  //   })
  // },[])

  return (
    // <div style={style}>
    <Grid style={style}>
      <Grid container>
        <Grid item xs={3}>
          <Link to="/">
            <CentLogo />
          </Link>
        </Grid>
        <Grid item xs={9}>
          <ChatHeading />
        </Grid>
      </Grid>
      {ChatCollections ? (
        <Grid container>
          <Grid item xs={3}>
            <MyChatLeftBar chat={ChatCollections} />
          </Grid>
          <Grid item xs={9}>
            <MyChatRightBar chat={ChatCollections} />
          </Grid>
        </Grid>
      ) : (
        <div></div>
      )}
    </Grid>
    // </div>
  );
};
