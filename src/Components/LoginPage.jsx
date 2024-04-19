import { TextField } from "@mui/material";
import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="left">
        <h1>building innovation; empowering change</h1>
      </div>
      <div className="right">
        <div className="loginField">
          <h1>Login</h1>

          <TextField
            className="textField"
            id="outlined-basic"
            label="Username"
            variant="outlined"
            sx={{ width: "100%", paddingTop: "10px", marginTop:"50px"}}
          />

          <TextField
            className="textField"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{ width: "100%", paddingTop: "10px", marginTop:"20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
