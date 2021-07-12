import React, { useEffect } from "react";
import { ChatPerson } from "./ChatPerson";

export const MyChatLeftBar = ({ setId, phoneNo, chat }) => {
  var ChatList = chat;

  const space = {
    height: "75.5vh",
    overflowY: "scroll",
  };

  return (
    <div style={space}>
      {ChatList.map((chat, i) => {
        console.log(chat.members[0], phoneNo);
        var lastMessage = chat.chats[chat.chats.length - 1].message;
        if (chat.members[0] === phoneNo) {
          if (lastMessage.length >= 20) {
            lastMessage = lastMessage.slice(0, 19) + "...";
          }
          return (
            <div
              onClick={() => {
                setId(chat.id);
              }}
            >
              <ChatPerson
                name={chat.members[1]}
                chat={lastMessage}
                chatId={chat.id}
              />
            </div>
          );
        } else {
          if (lastMessage.length >= 20) {
            lastMessage = lastMessage.slice(0, 19) + "...";
          }
          return (
            <React.Fragment>
              <div
                onClick={() => {
                  setId(chat.id);
                }}
              >
                <ChatPerson
                  name={chat.members[0]}
                  chat={lastMessage}
                  chatId={chat.id}
                />
              </div>
            </React.Fragment>
          );
        }
      })}
    </div>
  );
};
