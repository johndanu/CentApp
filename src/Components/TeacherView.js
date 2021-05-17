import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// import { ChatTypingSpace } from "./MyChat/ChatTypingSpace";
import { Link } from "react-router-dom";
import TeacherLeftView from "./TeacherVew/TeacherLeftView";
import TeachingPlace from "./TeacherVew/TeachingPlace";
import { TeacherRightBar } from "./TeacherVew/TecherRightBar";
import Firebase from "firebase";

export default function TeacherView() {
  const style = {
    paddingTop: "1px",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    height: "85vh",
    margin: "50px",
    width: "93vw",
    backgroundColor: "#F2F2F2",
  };

  const [classCollection2, setClassCollection2] = useState([]);

  const [value, setValue] = useState(false);

  const getUserData = () => {
    // console.log("sd===============+=");
    let ref = Firebase.database().ref("/ClassCollection");
    ref.on("value", (snapshot) => {
      const state = snapshot.val();
      console.log("DATA SAVED", state);
      setClassCollection2(state);
      setValue(true);
    });
  };
  useEffect(() => {
    getUserData();
  }, []);
  const classCollection = {
    id: "class001",
    Name: "Sooriyan Tution",
    studets: ["077653625", "09827362", "0776526517"],
    Teacher: "0774766597",
    classes: [
      {
        id: "class001-001",
        Class: "Maths",
        teacher: "Senthil",
        teacherno: "0774766597",
        classupdates: [
          {
            type: "ClassUpdate",
            classOn: "Algorithams",
            dateAndTime:
              "Sun May 10 2021 22:38:59 GMT+0530 (India Standard Time)",
            place: "offline",
            venue: "Sooriyan Building",
          },
          {
            type: "assignment",
            title: "Make a cuboid with cardboard",
            duedate: "Date",
            description:
              "Every students should submit a cuboid that made up of cardboard",
          },
          {
            type: "studyMaterial",
            title: "Further Studies",
            link: "www.mathteacher.com",
          },
          {
            type: "ClassUpdate",
            classOn: "Maths Class on Arithmetic Expression",
            dateAndTime:
              "Sun May 09 2021 22:38:59 GMT+0530 (India Standard Time)",
            place: "online",
            venue: "meet.google.com/ffd-fzss-kty",
          },
        ],
        classPersonal: [
          {
            id: "Classchat003",
            type: "personal",
            members: ["0774766597", "0776858489"],
            chats: [
              {
                id: "message001",
                sender: "0774766597",
                message: "Hi Teacher! I want a leave tommorow",
              },
              {
                id: "message002",
                sender: "0776858489",
                message: "Have you finished your Assignment",
              },
              {
                id: "message003",
                sender: "0774766597",
                message: "Yes I have submitted an hour before",
              },
              {
                id: "message001",
                sender: "0776858489",
                message: "OK fine.",
              },
            ],
          },
          {
            id: "Classchat003",
            type: "personal",
            members: ["077458757", "0776858489"],
            chats: [
              {
                id: "message001",
                sender: "0774766597",
                message: "Hi Teacher! I want a leave tommorow",
              },
              {
                id: "message002",
                sender: "0776858489",
                message: "Have you finished your Assignment",
              },
              {
                id: "message003",
                sender: "0774766597",
                message: "Yes I have submitted an hour before",
              },
              {
                id: "message001",
                sender: "0776858489",
                message: "OK fine.",
              },
            ],
          },
        ],
        classGroup: [
          {
            sender: "0774766597",
            Message: "Hi Team When shall we have our Next Gavel Club",
          },
          {
            sender: "0774766597",
            Message: "Next Week",
          },
          {
            sender: "0774766597",
            Message: "Next Week Iam Busy",
          },
        ],
      },
      {
        id: "class001-002",
        Class: "HTML",
        teacher: "Senthil",
        classupdates: [
          {
            type: "assignment",
            title: "Assignment One",
            duedate: "Date",
            description: "This would be a sample description",
          },
          {
            type: "studyMaterial",
            title: "HTML Tags",
            link: "www.schoolbag.pro",
          },
          {
            type: "ClassUpdate",
            classOn: "Using HTML tags Effectively",
            dateAndTime:
              "Sun May 09 2021 22:38:59 GMT+0530 (India Standard Time)",
            place: "online",
            venue: "meet.google.com/ffd-fzss-kty",
          },
          {
            type: "ClassUpdate",
            classOn: "Build Your First Website",
            dateAndTime:
              "Sun May 10 2021 22:38:59 GMT+0530 (India Standard Time)",
            place: "offline",
            venue: "Mahareswary Building",
          },
        ],
        classPersonal: [
          {
            id: "Classchat003",
            type: "personal",
            members: ["0774766597", "0776858489"],
            chats: [
              {
                id: "message001",
                sender: "0774766597",
                message: "Hi Teacher! I want a leave tommorow",
              },
              {
                id: "message002",
                sender: "0776858489",
                message: "Have you finished your Assignment",
              },
              {
                id: "message003",
                sender: "0774766597",
                message: "Yes I have submitted an hour before",
              },
              {
                id: "message001",
                sender: "0776858489",
                message: "OK fine.",
              },
            ],
          },
          {
            id: "Classchat003",
            type: "personal",
            members: ["077458757", "0776858489"],
            chats: [
              {
                id: "message001",
                sender: "0774766597",
                message: "Hi Teacher! I want a leave tommorow",
              },
              {
                id: "message002",
                sender: "0776858489",
                message: "Have you finished your Assignment",
              },
              {
                id: "message003",
                sender: "0774766597",
                message: "Yes I have submitted an hour before",
              },
              {
                id: "message001",
                sender: "0776858489",
                message: "OK fine.",
              },
            ],
          },
        ],
        classGroup: [
          {
            sender: "0774766597",
            Message: "Hi Team When shall we have our Next Gavel Club",
          },
          {
            sender: "0774766597",
            Message: "Next Week",
          },
          {
            sender: "0774766597",
            Message: "Next Week Iam Busy",
          },
        ],
      },
    ],
  };
  return (
    <div style={style}>
      {value ? (
        <span>
          <Grid container>
            <Grid item xs={3}>
              <Link to="/">
                <TeachingPlace name={classCollection2[0].Name} />
                {/* <p>{classCollection2}</p> */}
              </Link>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sm={3}>
              <TeacherLeftView classes={classCollection2[0]} />
            </Grid>
            <Grid item sm={9}>
              <Grid container>
                <TeacherRightBar classes={classCollection2[0]} />
              </Grid>
            </Grid>
          </Grid>
        </span>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
