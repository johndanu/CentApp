import React, { useContext, useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { ChatPerson } from "./ChatPerson";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "../core/fab";
import firebase from "firebase";
import { AuthContext } from "../../Auth";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  space: {
    height: "75.5vh",
    overflowY: "scroll",
    position: "relative",
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}));
export const MyChatLeftBar = ({ phoneNo, chat }) => {
  const classes = useStyles();
  let match = useRouteMatch();
  const [ChatList, setChatList] = useState(chat);
  // const [user] = useContext(AuthContext);
  // const [phoneNo, setPhoneNo] = useState("")

  useEffect(() => {
    setChatList(chat);
    // console.log(ChatList);
    // setPhoneNo(user.user.phoneNumber);
  }, [chat]);
  // console.log(chat[0][1], "/chatt");
  const ChatuserList = (props) => {
    var { phoneNo } = props;
    let userList = [];
    for (let i = 0; i < ChatList.length; i++) {
      if (ChatList[i][1].id) {
        var ChatPersonName = ChatList[i][1].members[0];
        ChatList[i][1].members.map((item) => {
          if (item != phoneNo) {
            // console.log("/////", item);
            ChatPersonName = item;
          }
        });
        // var msgLength = ChatList[i][1].chats.length;
        // var msgObject = ChatList[i][1].chats[msgLength - 1];
        // var lastMessage = [];
        // Object.entries(msgObject).map(([v, val]) => {
        //   console.log(1111111111, i);
        //   if (val.message) {
        //     lastMessage.push(val.message);
        //   } else {
        //     lastMessage = "";
        //   }
        //   // return lastMessage;
        //   console.log(lastMessage, "/////////");
        // });
        // console.log(ChatList[i][1].chats[msgLength - 1], "//");
        var lastMessage = "";
        if (ChatList[i][1].chats) {
          var msgLength = ChatList[i][1].chats.length;
          var msgObject = ChatList[i][1].chats[msgLength - 1];
          msgObject &&
            Object.entries(msgObject).map(([v, val]) => {
              if (val.message) {
                lastMessage = val.message;
              } else {
                lastMessage = "";
              }
              // return lastMessage;
            });
        }
      }

      // var lastMessage = ChatList[i][1].chats[ChatList[i][1].chats.length - 1].message;
      //  lastMessage = "let's start";
      // if (lastMessage.length >= 20) {
      //   lastMessage = lastMessage.slice(0, 19) + "...";
      // }

      // if (ChatList[i][1].chats) {
      //   var msgLength = ChatList[i][1].chats.length;
      //   var msgObject = ChatList[i][1].chats[msgLength - 1];
      //   var lastMessage = [];
      //   Object.entries(msgObject).map(([v, val]) => {
      //     console.log(1111111111, i);
      //     if (val.message) {
      //       lastMessage.push(val.message);
      //     } else {
      //       lastMessage = "";
      //     }
      //     return lastMessage;
      //     console.log(lastMessage, "/////////");
      //   });
      //   console.log(ChatList[i][1].chats[msgLength - 1], "//");
      // }
      userList.push(
        <div>
          <div key={i}>
            <Link to={`${match.url}/${ChatList[i][0]}`}>
              <div>
                {/* {ChatList[i][1] && <p>dddddd</p>} */}
                <ChatPerson
                  name={ChatPersonName}
                  chat={lastMessage}
                  chatId={"s"}
                />
              </div>
            </Link>
          </div>
        </div>
      );
    }
    return userList;
  };

  return (
    <div className={classes.space}>
      <ChatuserList />
      <div className={classes.fab}>
        <Fab />
      </div>
    </div>
  );
};
