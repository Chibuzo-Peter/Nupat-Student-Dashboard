import { Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ProfilePic from "../Images/Profile photo.png";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "flex-end",
  backgroundColor: "white",
});
const UserBox = styled("Box")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  color: "#000",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#EEEEEE",
  padding: "0 20px",
  borderRadius: theme.shape.borderRadius,
  width: "20%",
  color: "white",
  display: "flex",
  alignItems: "center",
  marginRight: "10px",
}));

const Icons = styled("Box")(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="span">Welcome back, James Obogu</Typography>

        <Search>
          <SearchIcon sx={{ color: "black" }} />
          <InputBase placeholder="Search..." sx={{ color: "black" }} />
        </Search>
        <Icons>
          <Avatar src={ProfilePic} onClick={(e) => setOpen(true)} />
          <Badge badgeContent={""} color="error">
            <Notifications sx={{ color: "#b3b3b3" }} />
          </Badge>
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar src={ProfilePic} />
          <Typography variant="span">Welcome back, James Obogu</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Courses</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
