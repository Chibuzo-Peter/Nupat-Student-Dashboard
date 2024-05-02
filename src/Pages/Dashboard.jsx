import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { Box, Card, Container, Stack, Typography } from "@mui/material";
import DashboardRightbar from "../Components/RightDashboard/DashboardRightbar";
import Round from "../Images/round.png"
import Round2 from "../Images/round2.png"
import Arrow from "../Images/arrowdot.png"

import styled from "styled-components";
const Dashboard = () => {

const Button = styled.button`
border : none;
background-color : #599FD5;
color : #FFFFFF;
font-size : 25px;
padding : 25px;
border-radius : 10px;
cursor :pointer;  
width: 30%; 
margin: 0 15px 0 0;
box-shadow: 0 6px 20px 2px #599FD5;
margin-bottom : 100px;
top:3rem;

`;


  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Box height="100vh" flex={4} p={2} >
          <Card sx={{bgcolor:"#131F45", width:"100%", borderRadius:"15px", padding:"25px",}}>
            <Typography variant="h6" component="p" sx={{color:"#FFFFFF", width:"26.5%"}} fontWeight={100}>
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
         
          <Box sx={{display:"flex",  sm:{flexDirection:"column"},  xs:{flexDirection:"column"}, width:"100%",  padding:"10px",}}>
          <Card sx={{bgcolor:"#FFFFFF",marginRight:"20px", alignItems:"center", marginTop:"3rem", width:"50%", height:"35%", borderRadius:"15px", padding:"25px",}}>
          <Typography variant="h6" component="p" sx={{color:"#131F45", }} fontWeight={100}>
          Today’s Course
          </Typography>
          <Typography sx={{color:"#B5B5B5", marginBottom:"1rem"}}>0 lessons, 0 hours 0 minutes</Typography>
            
              
         
            <img src={Round} alt="sign"   height="38%" />
            <Typography  component="p" sx={{left:"11rem", bottom:"08rem", height:"40px", width:"30%", position:"relative", color:"#000000", fontWeight:"700", }}>Product Design</Typography>
         
            
            
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
              <Button>
                
              Skip this
              </Button>
              <Button>
              Continue 

              </Button>
            
           
             

                


               
                
           







          </Card>
          <Card sx={{bgcolor:"#FFFFFF",  alignItems:"center",  marginTop:"3rem", width:"50%", height:"40%", borderRadius:"15px", padding:"25px",}}>
          <Typography variant="h6" component="p" sx={{color:"#131F45", }} fontWeight={100}>
          Today’s Event
          </Typography>
          <Typography sx={{color:"#B5B5B5", marginBottom:"1rem"}}>0 lessons, 0 hours 0 minutes</Typography>
            
              
         
            <img src={Round2} alt="sign"   height="38%" />
            <Typography  component="p" sx={{left:"11rem", bottom:"08rem", height:"40px", width:"30%", position:"relative", color:"#000000", fontWeight:"700", }}>Product Design</Typography>
         
            
            
              <Box sx={{display:"flex",  left:"08.5rem", bottom:"09rem", position:"relative", width:"40%", paddingRight:"50px",  flexDirection: "row", justifyContent: "center", alignItems: "center",  cursor:"pointer", margin:"20px"}}>
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
          
              <Typography component="button" sx={{marginRight:"10px", position:"absolute",border:"none",top:"35rem", width:"6%",fontSize:"1.3rem", height:"5%", bgcolor:"#D7EAF8", cursor:"pointer", color:"#B5B5B5", borderRadius:"7px", padding:"5px"}}>
              Details
            </Typography>
              <Typography component="button" sx={{marginRight:"10px", boxShadow: "0 6px 20px 2px #599FD5", left:"30rem", position:"absolute",border:"none",top:"35rem", width:"6%",fontSize:"1.3rem", height:"5%", bgcolor:"#599FD5", cursor:"pointer", color:"#FFFFFF", borderRadius:"7px", padding:"5px"}}>
              event
            </Typography>
           
             

                


               
                
           







          </Card>
          

          </Box>
        </Box>
        <DashboardRightbar />
      </Stack>
    </Box>
  );
};

export default Dashboard;
