import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { ChatPerson } from "./ChatPerson";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "../core/fab";

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
  useEffect(() => {
    setChatList(chat);
  }, [chat]);
  console.log(chat, "chatt");
  return (
    <div className={classes.space}>
      {ChatList &&
        ChatList.map((chat, i) =>
          chat.map((chat) => {
            var lastMessage = "let's start";
            if (chat.id) {
              var ChatPersonName = chat.members[1];
              chat.members.map((item) => {
                if (item !== phoneNo) {
                  ChatPersonName = item;
                }
              });
              if (chat.chats) {
                lastMessage = chat.chats[chat.chats.length - 1].message;
                console.log(lastMessage, "/////////////");
              } else {
                lastMessage = "let's start";
              }
              // if (lastMessage.length >= 20) {
              //   lastMessage = lastMessage.slice(0, 19) + "...";
              // }
            }
            return (
              chat.id && (
                <div key={i}>
                  <Link to={`${match.url}/${chat.id}`}>
                    <div>
                      <ChatPerson
                        name={ChatPersonName}
                        chat={lastMessage}
                        chatId={chat.id}
                      />
                    </div>
                  </Link>
                </div>
              )
            );
          })
        )}
      <div className={classes.fab}>
        <Fab />
      </div>
    </div>
  );
};
