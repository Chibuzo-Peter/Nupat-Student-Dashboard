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
          <Card sx={{bgcolor:"#FFFFFF", marginTop:"3rem", width:"50%", height:"40%", borderRadius:"15px", padding:"25px",}}>
          <Typography variant="h6" component="p" sx={{color:"#131F45", }} fontWeight={100}>
          Today’s Course
          </Typography>
          <Typography sx={{color:"#B5B5B5", marginBottom:"1rem"}}>0 lessons, 0 hours 0 minutes</Typography>
            
              
          {/* <Box marginBlock="20px" sx={{  display:"flex",  gap:"40px", border:"1px solid red", flexWrap:"nowrap"}}> */}
            <img src={Round} alt="sign"   height="38%" />
            <Typography  component="p" sx={{left:"11rem", bottom:"08rem", height:"40px", width:"30%", position:"relative", color:"#000000", fontWeight:"700", }}>Product Design</Typography>
          {/* </Box> */}
            
            
              <Box sx={{display:"flex", left:"08.5rem", bottom:"09rem", position:"relative", width:"40%", paddingRight:"50px",  flexDirection: "row", justifyContent: "center", alignItems: "center",  cursor:"pointer", margin:"20px"}}>
                <img src={Arrow}
                alt="arrow"   />
                <Typography sx={{ marginLeft:"4px",  color:"#B5B5B5"}}>0 Topics</Typography>
                
              </Box >
              <Box sx={{display:"flex", left:"17rem", bottom:"11.8rem", position:"relative", width:"40%", paddingRight:"50px",  flexDirection: "row", justifyContent: "center", alignItems: "center",  cursor:"pointer", margin:"20px"}}>
                <img src={Arrow}
                alt="arrow"  />
                <Typography sx={{ marginLeft:"4px",  color:"#B5B5B5"}}>0 Min</Typography>
                
              </Box >
              <Box sx={{display:"flex", left:"18.2rem", bottom:"11.9rem", position:"relative", width:"40%", paddingRight:"50px",  flexDirection: "row", justifyContent: "center", alignItems: "center",  cursor:"pointer", margin:"20px"}}>
                <img src={Arrow}
                alt="arrow"   />
                <Typography sx={{ marginLeft:"4px",  color:"#B5B5B5"}}>0 Students</Typography>
                
              </Box >
              <Box sx={{display:"flex", left:"09.2rem", bottom:"14.7rem", position:"relative", width:"40%", paddingRight:"50px",  flexDirection: "row", justifyContent: "center", alignItems: "center",  cursor:"pointer", margin:"20px"}}>
                <img src={Arrow}
                alt="arrow"   />
                <Typography sx={{ marginLeft:"4px",  color:"#B5B5B5"}}>0 Speakers</Typography>
                
              </Box >

                            
              

                
           
             

                


               
                
           







          </Card>
        </Box>
        <DashboardRightbar />
      </Stack>
    </Box>
  );
};

export default Dashboard;
