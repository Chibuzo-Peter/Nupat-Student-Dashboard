import React from "react";
import loginPage from "./Components/Authentication/LoginPage"
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<loginPage />} />




      </Routes>


    </div>
  );
}

export default App;
