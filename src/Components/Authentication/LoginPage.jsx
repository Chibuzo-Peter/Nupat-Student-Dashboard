import {
  Box,
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
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "../Authentication/LoginPage.css";
import { CancelOutlined } from "@mui/icons-material";
import Logo from "../../Images/logo.png";
import axios from "axios";

const LoginPage = () => {
  const [OpenLoginPage, setOpenLoginPage] = useState(false);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogin = async () => {
    const url = "https://code-ville.vercel.app/users";
    const data = {
      Username: Username,
      Password: Password,
    };
    try {
      const response = await axios.post(url, data);
    } catch (err) {
      console.log(err);
    }
  };

  const changeState = () => {
    setOpenLoginPage(!OpenLoginPage);
  };

  return (
    <Box className="body">
      <div className="loginPage">
        <div className="Login">
          <div className="left">
            <img src={Logo} alt="" className="Logo" />
            <h1>building innovation; empowering change</h1>
          </div>
          <div className="right">
            <div className="loginField">
            <Typography component="a" href="/dashboard">
                  Login
                </Typography>
              <TextField
                className="textField"
                id="outlined-basic"
                label="Username"
                variant="outlined"
                sx={{ width: "100%", paddingTop: "10px", marginTop: "50px" }}
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextField
                className="textField"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                sx={{ width: "100%", paddingTop: "10px", marginTop: "20px" }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="comntained"
                sx={{
                  bgcolor: "#151F42",
                  color: "#fff",
                  marginTop: "10px",
                  width: "100%",
                }}
                onClick={handleLogin}
              >
                <Typography component="a" href="/dashboard">
                  Login
                </Typography>
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
              <img src={Logo} alt="" className="Logo" />
              <h1>building innovation; empowering change</h1>
            </div>
            <div className="right">
              <div className="loginField">
              <Typography component="a" href="/dashboard">
                  Login
                </Typography>

                <List
                  sx={{
                    width: "100%",
                    bgcolor: "tomato",
                    borderRadius: "10px",
                  }}
                  aria-label="contacts"
                >
                  <ListItem disablePadding padding="0px">
                    <ListItemButton>
                      <ListItemIcon>
                        <CancelOutlined />
                      </ListItemIcon>
                      <ListItemText variant="p"
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
                  onChange={(e) => setUsername(e.target.value)}
                />

                <TextField
                  className="textField"
                  id="outlined-basic"
                  label="Password"
                  placeholder="password"
                  variant="outlined"
                  sx={{ width: "100%", paddingTop: "10px", marginTop: "10px" }}
                  onChange={(e) => setPassword(e.target.value)}
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
                  onClick={handleLogin}
                >
                  <Typography component="a" href="/dashboard">
                  Login
                </Typography>
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
            <img src={Logo} alt="" />
            <div className="left">
              <img src={Logo} alt="" className="Logo" />
              <h1>building innovation; empowering change</h1>
            </div>
            <div className="right">
              <div className="loginField">
                <h1>Login</h1>

                <List
                  sx={{
                    width: "100%",
                    bgcolor: "tomato",
                    borderRadius: "10px",
                  }}
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
                  onChange={(e) => setUsername(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: "#151F42",
                    color: "#fff",
                    marginTop: "10px",
                    width: "100%",
                  }}
                  onClick={handleLogin}
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
    </Box>
  );
};

export default LoginPage;
