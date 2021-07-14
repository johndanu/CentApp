import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChatPerson } from "./ChatPerson";

export const MyChatLeftBar = ({ setId, phoneNo, chat }) => {
  var ChatList = chat;
  console.log(ChatList,'////');
  const space = {
    height: "75.5vh",
    overflowY: "scroll",
  };
  var x=10;
  return (
    <div style={space}>
      {ChatList && ChatList.map((chat, i) => (
        // <p>hiiioio</p>
        
        chat.map((chat) => {
          var x = 10;
          if (chat.chats) {
            var x = 23;
            var lastMessage = chat.chats[chat.chats.length - 1].message;
            console.log(lastMessage, '////mes s')
            if (lastMessage.length >= 20) {
              var lastMessage =  lastMessage.slice(0, 19) + "...";
            }
          }
         // // console.log(chat.chats[chat.chats.length - 1].message,'/////messs')
          return (
            chat.chats  &&
            <div>
              <Link to={'/'+`${chat.id}`} >
                <div>
                <ChatPerson
                  name={chat.members[1]}
                  chat={lastMessage}
                  chatId={chat.id}
                />
              </div>
              </Link>
            </div>
            )
        })
                
      ))}
    </div>
  );
};
// var lastMessage = chat.chats[chat.chats.length - 1].message;
//         if (chat.members[0] === phoneNo) {
//           if (lastMessage.length >= 20) {
//             lastMessage = lastMessage.slice(0, 19) + "...";
//           }
//           return (
            // <div
            //   onClick={() => {
            //     setId(chat.id);
            //   }}
            // >
            //   <ChatPerson
            //     name={chat.members[1]}
            //     chat={lastMessage}
            //     chatId={chat.id}
            //   />
            // </div>
//           );
//         } else {
//           if (lastMessage.length >= 20) {
//             lastMessage = lastMessage.slice(0, 19) + "...";
//           }
//           return (
//             <React.Fragment>
//               <div
//                 onClick={() => {
//                   setId(chat.id);
//                 }}
//               >
//                 <ChatPerson
//                   name={chat.members[0]}
//                   chat={lastMessage}
//                   chatId={chat.id}
//                 />
//               </div>
//             </React.Fragment>
//           );
//         }