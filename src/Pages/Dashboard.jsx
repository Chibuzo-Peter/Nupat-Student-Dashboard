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
        <Box sx={{height:"100hv"}} flex={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }} >
          <Card display="flex" sx={{bgcolor:"#131F45", marginTop:"15px", marginBottom:"30px", width:"100%", height:"12%", borderRadius:"15px", padding:"25px"}}>
            
          </Card>
         <Box  sx={{height:"25%", display:"flex", flexDirection:{xs:"column", sm:"column", md:"row"},  width:"100%",   gap:"10px"  }}>
         
         <Card sx={{height:"100%", width:"50%", border:"1px solid #000000",  borderRadius:"10px"}}></Card>
         <Card sx={{height:"100%", width:"50%", border:"1px solid #000000",  borderRadius:"10px"}}></Card>
         
         </Box>
          <Box  sx={{height:"54%", marginTop:"25px", display:"flex", borderRadius:"10px", width:"100%", border:"1px solid black",  gap:"10px"  }}>
          
          </Box>
         
        </Box>
        <DashboardRightbar />
      </Stack>
    </Box>
  );
};

export default Dashboard;
