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
    <Box >
      <Navbar />
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Sidebar style={{ display: { xs: "none", sm: "none", md: "block" } }} />
        <Box
          height="100%"
          width="50vw"
          my={4}
          display="flex"
          alignItems="center"
          flexDirection="column"
          gap={2}
          p={2}
        >
          <Card
            style={{
              width: "50vw",
              height: "60vh",
              top: "71px",
              left: "271px",
              borderRadius: "15px",
              background: "#F4F4F4",
              // width: { xs: "70vw", sm: "70vw", md: "70vw", lg: "50vw" },
            }}
          >
            <div>
            <img
  src={Banner}
  alt=""
  style={{
    height: "35vh",
    width: "100%",
    maxWidth: "100%", 
    backgroundPosition: "center",
  
  }}
/>

              <span>
                <Edit
                  sx={{
                    marginLeft: "45vw",
                    position: "relative",
                    top: "-25vh",
                    color: "#fff",
                  }}
                />
              </span>
            </div>
            <img
              src={ProfilePic}
              alt=""
              style={{
                position: "absolute",
                width: "122px",
                height: "122px",
                top: "40vh",
                left: "16vw",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                top: "10vh",
                marginLeft: "20px",
                marginBottom: "20px",
              }}
            >
              <h4>James Obogu</h4>
              <h5>Full Stack Developer</h5>
              <h6>
                Lagos State, Nigeria{" "}
                <span>
                  <a href="/Profile" style={{ textDecoration: "none" }}>
                    Contact info
                  </a>
                </span>
              </h6>
            </div>
          </Card>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <h3>About</h3>
            <span>
              <Edit
                sx={{
                  marginLeft: "35vw",
                  // position: "absolute",
                  top: "15vh",
                  color: "#000",
                }}
              />
            </span>
          </div>

          <Card
            style={{
              width: "50vw",
              height: "60vh",
              top: "71px",
              left: "271px",
              borderRadius: "15px",
              background: "#F4F4F4",
              display: { xs: "block", sm: "block", md: "block" },
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              sapiente, laboriosam perspiciatis ab commodi laborum quaerat
              repudiandae tempora voluptates eaque!
            </p>
          </Card>
        </Box>
        <Box
          height={200}
          width={500}
          my={4}
          display="flex"
          alignItems="center"
          gap={4}
          p={2}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          This is the side of the Profile screen
        </Box>
      </Stack>
    </Box>
  );
};

export default Profile;
