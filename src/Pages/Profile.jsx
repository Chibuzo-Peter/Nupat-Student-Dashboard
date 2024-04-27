import React from "react";
import Sidebar from "../Components/Sidebar";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Navbar from "../Components/Navbar";
import Banner from "../Images/profile banner.png";
import ProfilePic from "../Images/Profile photo.png";
import { Edit } from "@mui/icons-material";

const Profile = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
        <Sidebar style={{ display: { xs: "none", sm: "none", md: "none" } }} />
        <Box
          my={4}
          display="flex"
          alignItems="center"
          flexDirection="column"
          gap={2}
          p={2}
          flexGrow={1}
        >
          <Card
            style={{
              width: "100%",
              maxWidth: "800px",
              borderRadius: "15px",
              background: "#F4F4F4",
            }}
          >
            <img
              src={Banner}
              alt=""
              style={{
                height: "35vh",
                width: "100%",
                objectFit: "cover",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            />
            <span>
              <Edit
                sx={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  color: "#fff",
                }}
              />
            </span>
            <CardContent>
              <img
                src={ProfilePic}
                alt=""
                style={{
                  width: "122px",
                  height: "122px",
                  borderRadius: "50%",
                  position: "relative",
                  top: "-61px",
                  left: "14px",
                }}
              />
              <div style={{ marginLeft: "20px" }}>
                <Typography variant="h4" component="h4" gutterBottom>
                  James Obogu
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Full Stack Developer
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Lagos State, Nigeria{" "}
                  <span>
                    <a href="/Profile" style={{ textDecoration: "none" }}>
                      Contact info
                    </a>
                  </span>
                </Typography>
              </div>
            </CardContent>
          </Card>

          <Box my={2}>
            <Typography variant="h4" component="h3" gutterBottom>
              About
              <span>
                <Edit sx={{ marginLeft: "8px", color: "#000" }} />
              </span>
            </Typography>
            <Card
              style={{
                width: "90vw",
                maxWidth: "600px",
                borderRadius: "15px",
                background: "#F4F4F4",
              }}
            >
              <CardContent>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  sapiente, laboriosam perspiciatis ab commodi laborum quaerat
                  repudiandae tempora voluptates eaque!
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
        <Box
          height={200}
          width={500}
          my={4}
          display={{ xs: "none", sm: "none", md: "block" }}
          alignItems="center"
          justifyContent="center"
        >
          This is the side of the Profile screen
        </Box>
      </Stack>
    </Box>
  );
};

export default Profile;
