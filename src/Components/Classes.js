import React from "react";
import Grid from "@material-ui/core/Grid";
import { TutorialName } from "./StudentViewCenter/TutorialName";
import { TutoryLeftBar } from "./StudentViewCenter/TutoryLeftBar";
import { TutoryRightBar } from "./StudentViewCenter/TutoryRightBar";
import { Link } from "react-router-dom";
export const Classes = () => {
  const style = {
    paddingTop: "1px",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    height: "85vh",
    margin: "50px",
    width: "185vh",
    backgroundColor: "#F2F2F2",
  };

  const leftContainer = {
    overflowY: "scroll",
  };

  const ClassCollection = {
    id: "class001",
    Name: "Uki Coding School",
    studets: ["077653625", "09827362", "0776526517"],
    Teacher: "09834323",
    classes: [
      {
        id: "class001-001",
        Class: "Css",
        teacher: "Mathan",
        classupdates: [
          {
            type: "assignment",
            title: "Fun Work",
            duedate: "Date",
            description: "Here goes assignment",
          },

          {
            type: "ClassUpdate",
            classOn: "Using Css tags Effectively",
            dateAndTime:
              "Sun May 09 2021 22:38:59 GMT+0530 (India Standard Time)",
            place: "online",
            venue: "meet.google.com/ffd-fzss-kty",
          },
          {
            type: "studyMaterial",
            title: "HTML Tags",
            link: "https://books.goalkicker.com/CSSBook/CSSNotesForProfessionals.pdf",
          },
          {
            type: "ClassUpdate",
            classOn: "Css Beutify your Site",
            dateAndTime:
              "Sun May 10 2021 22:38:59 GMT+0530 (India Standard Time)",
            place: "offline",
            venue: "Thilalangadi Building",
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
      <Grid container>
        <Grid item xs={3}>
          <Link to="/">
            <TutorialName institute={ClassCollection.Name} />
          </Link>
        </Grid>
        <Grid item xs={3}>
          <h3>Class</h3>
        </Grid>
        {/* <Grid item xs={3}>
          <a href="/clspersonal">
            <h3>Personal</h3>
          </a>
        </Grid> */}
        {/* <Grid item xs={3}>
          <h3>Group</h3>
        </Grid> */}
      </Grid>
      <Grid container>
        <Grid item xs={3}>
          <TutoryLeftBar classes={ClassCollection.classes} />
        </Grid>
        <Grid item xs={9}>
          <TutoryRightBar classes={ClassCollection.classes} />
        </Grid>
      </Grid>
    </div>
  );
};
