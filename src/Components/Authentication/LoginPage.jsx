import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import React from "react";
import "../Authentication/LoginPage.css";

const LoginPage = () => {
  return (
  <Box className="body">


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
            sx={{ width: "100%", paddingTop: "10px", marginTop: "50px" }}
          />

          <TextField
            className="textField"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{ width: "100%", paddingTop: "10px", marginTop: "20px" }}
          />

          <Button
            variant="comntained"
            sx={{
              bgcolor: "#151F42",
              color: "#fff",
              marginTop: "10px",
              width: "100%",
            }}
          >
            Login
          </Button>
          <div className="rememberMe">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Remember Me"
                sx={{ color: "#151f42" }}
              />
            </FormGroup>
            <span> <a href="#" style={{ textDecoration: 'none' }}>Forgot Password?</a> </span>
          </div>
        </div>
      </div>
    </div>
  </Box>
  );
};

export default LoginPage;
