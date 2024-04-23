import React from "react";

import { Route, Routes } from "react-router-dom";
import LoginPage from "./Components/Authentication/LoginPage";
import Facilitator from "./Pages/Facilitator";
import Courses from "./Pages/Courses";
import Profile from "./Pages/Profile";
import Resources from "./Pages/Resources";
import Chats from "./Pages/Chats";
import Calendar from "./Pages/Calendar";
import Dashboard from "./Pages/Dashboard";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/facilitator" element={<Facilitator />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/chat" element={<Chats />} />
        <Route path="/calendar" element={<Calendar />} />




      </Routes>


    </div>
  );
}

export default App;
