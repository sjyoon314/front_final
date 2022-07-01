import React from "react";
import Login from "./pages/Login";
import Course1 from "./pages/Course1";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import Message from "./pages/Message";
import Plms from "./pages/Plms";
import Error from "./pages/Error";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
        <div className="app"></div>
        <Routes>
          <Route exact path="/" element={<Plms/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/main" element={<Main/>}></Route>
          <Route exact path="/main/mypage" element={<MyPage/>}></Route>
          <Route exact path="/main/message" element={<Message/>}></Route>
          <Route exact path="/main/course1" element={<Course1/>}></Route>
          <Route exact path="/main/error" element={<Error/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
