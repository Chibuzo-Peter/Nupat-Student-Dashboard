import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { Box, Card, Container, Stack, Typography } from "@mui/material";
import DashboardRightbar from "../Components/DashboardRightbar";
import Round from "../Images/round.png"
import Arrow from "../Images/arrowdot.png"

const Dashboard = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Box height="100vh" flex={4} p={2} >
          <Card sx={{bgcolor:"#131F45", width:"100%", borderRadius:"15px", padding:"25px",}}>
            <Typography variant="h6" component="p" sx={{color:"#FFFFFF", width:"37%"}} fontWeight={100}>
              You have got <b style={{color:"#03DAF7"}}>1000+ bonus</b> points Feel Free to use them in your
              lessons
            </Typography>
            <Typography component="button" sx={{marginRight:"10px", bgcolor:"#599FD5", cursor:"pointer", color:"#FFFFFF", borderRadius:"5px", padding:"5px"}}>
            Get rewards
            </Typography>
            <Typography component="button"  sx={{bgcolor:"#131F45", cursor:"pointer", color:"#599FD5", border:"1px solid #599FD5", borderRadius:"5px", padding:"5px"}}>
            How to
            </Typography>
          </Card>
          <Card sx={{bgcolor:"#FFFFFF", marginBottom:"", width:"50%", borderRadius:"15px", padding:"25px",}}>
          <Typography variant="h6" component="p" sx={{color:"#131F45", width:"37%"}} fontWeight={100}>
          Today’s Course
          </Typography>
          <Typography sx={{color:"#B5B5B5"}}>0 lessons, 0 hours 0 minutes</Typography>
            
              
          <Box marginBlock="20px" sx={{  display:"flex", gap:"40px", flexWrap:"nowrap"}}>
            <img src={Round} alt="sign" style={{border:"1px solid red"}}/>
            <Typography  component="p" sx={{ height:"10%", color:"#000000", fontWeight:"700", border:"1px solid red"}}>Product Design</Typography>
          </Box>
            <Container >
            <Container sx={{display:"grid",  paddingTop:"30px",   gridTemplateColumns:"1fr 1fr"}}>
              <Box sx={{display:"flex",  cursor:"pointer", margin:"20px"}}>
                <img src={Arrow}
                alt="arrow"  />
                <Typography sx={{ marginLeft:"4px", color:"#B5B5B5"}}>0 Topics</Typography>
                
              </Box >
              <Box sx={{display:"flex",   cursor:"pointer", margin:"20px"}}>
                <img src={Arrow}
                alt="arrow"  />
                <Typography sx={{ marginLeft:"4px", color:"#B5B5B5"}}>0 Topics</Typography>
                
              </Box >
                </Container>
                
                <Container sx={{display:"flex"}}>
              <Box sx={{display:"flex", flexWrap:"wrap", cursor:"pointer", margin:"20px"}}>
                <img src={Arrow}
                alt="arrow"  />
                <Typography sx={{ color:"#B5B5B5"}}>0 Topics</Typography>
                
              </Box >
              <Box sx={{display:"flex", flexWrap:"wrap", cursor:"pointer", margin:"20px"}}>
                <img src={Arrow}
                alt="arrow"  />
                <Typography sx={{ color:"#B5B5B5"}}>0 Topics</Typography>
                
              </Box >
             



                </Container>
                
            </Container>







          </Card>
        </Box>
        <DashboardRightbar />
      </Stack>
    </Box>
  );
};

export default Dashboard;
