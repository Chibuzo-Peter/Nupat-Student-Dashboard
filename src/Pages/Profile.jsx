import React from "react";
import Sidebar from "../Components/Sidebar";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
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
      <Stack
        direction="row"
        spacing={1}
        justifyContent="space-between"
        bgcolor="#fff"
      >
        <Sidebar />
        <Box
          height={400}
          width="100%"
          my={4}
          display="flex"
          alignItems="center"
          gap={2}
          p={2}
        >
          <Card sx={{ maxWidth: 700 }}>
            <CardMedia
              component="img"
              alt="Profile banner"
              height="200"
              image={Banner}
            />
            <Edit sx={{marginLeft:"40vw",position:"absolute", top:"15vh", color:"#fff" }}/>
            
            <Box mt={-5} p={2} position="absolute" top="40vh">
              <img src={ProfilePic} alt="" width={100} marginTop={5} />
              <Edit />
            </Box>

            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                James Obogu <br />
                <small>Full Stack Development</small>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                sapiente, laboriosam perspiciatis ab commodi laborum quaerat
                repudiandae tempora voluptates eaque!
              </Typography>
            </CardContent>
            
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
        >
          This is the side of the Profile screen
        </Box>
      </Stack>
    </Box>
  );
};

export default Profile;
