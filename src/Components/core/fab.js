import React, { useContext } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Firebase from "firebase";
import { AuthContext } from "../../Auth";

export default function FabS() {
  const [user] = useContext(AuthContext);
  const userPhoneNumber = user.user.phoneNumber;
  const getUser = () => {
    var chatUserName = prompt("write the user phone number");
    if (chatUserName) {
      let link = "/PersonalChatCollection/";
      let ref = Firebase.database().ref(link);
      const members = {
        0: `${chatUserName}`,
        1: `${userPhoneNumber}`,
      };
      let UserChatInfo = {
        chats: [
          {
            id: "",
            message: "",
            sender: "",
          },
        ],
        id: "chat004",
        members: members,
        type: "personal",
      };
      ref.push(UserChatInfo);
      console.log(UserChatInfo);
    }
    // alert();
  };
  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={getUser}>
        <AddIcon />
      </Fab>
    </div>
  );
}
