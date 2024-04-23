import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  FormControl,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";
import "../Authentication/LoginPage.css";
import { CancelOutlined } from "@mui/icons-material";
import axios from 'axios';


const LoginPage = () => {
  const [OpenLoginPage, setOpenLoginPage] = useState(false);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");


  const Login = async () =>{
    const url = ""
    const data = {
      Username: Username,
      Password: Password
    }
    try{
      const response = await axios.post(url, data)
    }
    catch(err){
      console.log(err)
    }
  }

  const changeState = () => {
    setOpenLoginPage(!OpenLoginPage);
  };

  return (
    <div className="loginPage">
      <div className="Login">
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

              <small style={{ textDecoration: "none" }}>
                Forgot Password?{" "}
              </small>
            </div>
          </div>
        </div>
      </div>

      {OpenLoginPage && (
        <div className="EmailError">
          <div className="left">
            <h1>building innovation; empowering change</h1>
          </div>
          <div className="right">
            <div className="loginField">
              <h1>Login</h1>

              <List
                sx={{ width: "100%", bgcolor: "tomato", borderRadius: "10px" }}
                aria-label="contacts"
              >
                <ListItem disablePadding padding="0px">
                  <ListItemButton>
                    <ListItemIcon>
                      <CancelOutlined />
                    </ListItemIcon>
                    <ListItemText
                      primary="Sorry, we couldn't find an account with that email, can we help you recover it?"
                      sx={{ fontsize: "3px" }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>

              <TextField
                className="textField"
                id="outlined-basic"
                label="Username"
                variant="outlined"
                sx={{
                  width: "100%",
                  paddingTop: "10px",
                  marginTop: "10px",
                  "& fieldset": { borderColor: "tomato !important" },
                }}
              />

              <TextField
                className="textField"
                id="outlined-basic"
                label="Password"
                placeholder="password"
                variant="outlined"
                sx={{ width: "100%", paddingTop: "10px", marginTop: "10px" }}
              />

              <Button
                variant="outlined"
                sx={{
                  bgcolor: "#151F42",
                  color: "#fff",
                  marginTop: "10px",
                  width: "100%",
                  "&:hover": {
                    color: "#000 !important",
                    bgcolor: "#000 !important",
                  },
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
                <span>
                  {" "}
                  <a href="#" style={{ textDecoration: "none" }}>
                    Forgot Password?
                  </a>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {OpenLoginPage && (
        <div className="PasswordError">
          <div className="left">
            <h1>building innovation; empowering change</h1>
          </div>
          <div className="right">
            <div className="loginField">
              <h1>Login</h1>

              <List
                sx={{ width: "100%", bgcolor: "tomato", borderRadius: "10px" }}
                aria-label="contacts"
              >
                <ListItem disablePadding padding="0px">
                  <ListItemButton>
                    <ListItemIcon>
                      <CancelOutlined />
                    </ListItemIcon>
                    <ListItemText
                      primary="Sorry, we couldn't find an account with that password, can we help you recover it?"
                      sx={{ fontsize: "3px" }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>

              <TextField
                className="textField"
                id="outlined-basic"
                label="Username"
                variant="outlined"
                sx={{
                  width: "100%",
                  paddingTop: "10px",
                  marginTop: "10px",
                }}
              />

              <TextField
                className="textField"
                id="outlined-basic"
                label="Password"
                placeholder="password"
                variant="outlined"
                sx={{
                  width: "100%",
                  paddingTop: "10px",
                  marginTop: "10px",
                  "& fieldset": { borderColor: "tomato !important" },
                }}
              />

              <Button
                variant="outlined"
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
                <span>
                  {" "}
                  <a href="#" style={{ textDecoration: "none" }}>
                    Forgot Password?
                  </a>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
