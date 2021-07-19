// import { Container } from "@material-ui/core";
import { Classes } from "./Components/Classes";
import { Home } from "./Components/Home";
import { MyChat } from "./Components/MyChat";
import { StudentViewClassPersonal } from "./Components/StudentViewClassPersonal";
import { TutoryCommonStuUpdateView } from "./Components/TutoryCommonStuUpdateView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AdminToStuChat } from "./Components/StudentViewCenter/AdminToStuChat";
import { Progress } from "./Components/Progress";
import TeacherView from "./Components/TeacherView";
import TeacherToAdminChat from "./Components/TeacherVew/TeacherToAdminChat";
import TeacherClassWork from "./Components/TeacherVew/TeacherClassWork";
import Teacher2StuPersonal from "./Components/TeacherVew/Teacher2StuPersonal";
// import IfMyChatOpen from "./Components/MyChat/IfMyChatOpen";
import LandingPage from "./Components/LandingPage";
import Landing from "./Components/landing/landing"
import { AuthProvider } from "./Auth";
import reducer, { initialState } from "./Authreducer";
import React, { useContext } from "react";

function App() {
  return (
    // <Container style={{ backgroundColor: "white", marginTop: "10px", paddingTop: "10px", marginBottom: "10px", borderRadius: "10px" }}>
    <AuthProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          {/* <Route
            exact
            path="/CentApp"
            render={() => {
              return <Redirect to="/" />;
            }}
          /> */}
          <Route path="/mychat" component={() => <MyChat />} />
          <Route path="/home" component={() => <Landing />} />

          <Route path="/landing" component={LandingPage} />
          <Route path="/mychat/:id" component={<MyChat />} />
          <Route path="/stuview" component={TutoryCommonStuUpdateView} />
          {/* <Route path="/clspersonal" component={StudentViewClassPersonal} /> */}
          {/* <Route path="/class" exact component={Classes} /> */}
          {/* <Route path="/class/:id/:simpleId" component={Classes} /> */}
          {/* <Route path="/adminmsg" component={AdminToStuChat} /> */}
          <Route path="/progress" component={Progress} />
          {/* <Route path="/techview" component={TeacherView} /> */}
          {/* <Route
            path="/techview/:instituteId/:classId"
            component={() => <TeacherView />}
          /> */}
          {/* <Route path="/TeachToAdminChat" component={TeacherToAdminChat} /> */}
          {/* <Route path="/TeachClsWork" component={TeacherClassWork} /> */}
          {/* <Route path="/Tech2Stu" component={Teacher2StuPersonal} /> */}
          {/* <Route path="/myChatOpen" component={IfMyChatOpen}/> */}
        </Switch>
      </Router>
    </AuthProvider>
    // </Container>
  );
}

export default App;
