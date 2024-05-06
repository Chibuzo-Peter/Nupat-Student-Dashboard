import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Box, Card, Container, Stack, Typography } from "@mui/material";
import DashboardRightbar from "../Components/DashboardProductData.js/DashboardRightbar";
import styled from "styled-components";
import DashboardHero from "../Components/DashboardProductData.js/DashboardHero";
import SwipeableTextMobileStepper from "../Components/DashboardProductData.js/DashboardHero";
import {CircularWithValueLabel} from "../Components/DashboardProductData.js/DashboardCircularValueLabel"
import DashboardProductInfo from "../Components/DashboardProductData.js/DashboardProductInfo";





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
    <Box sx={{ margin: "0"}}>
      <Navbar />
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Sidebar />
        <Box  sx={{height:"100hv", justifyContent:"center", flexWrap:"wrap", margin:"25px", width:"100%", alignItems:"center", }} flex={{ xs: 1, sm: 3, md: 4, lg: 5, xl: 6 }} >
        
        {/* <SwipeableTextMobileStepper /> */}
        <Box display="flex" sx={{bgcolor:"#131F45", alignItems:"center",  marginTop:"15px", marginBottom:"30px", width:{xs:"93%", sm:"100%",  md:"100%"}, height:{xs:"12%", sm:"15%", md:"12%"}, borderRadius:"15px", }}>
            
        </Box>
         {/* <DashboardHero /> */}
        
         <Box  sx={{height:{xs:"60%", sm:"70%", md:"23%"},  justifyContent:"center", display:"flex", alignItems:"center", flexDirection:{xs:"column", sm:"column", md:"row",},  width:{xs:"100vw", sm:"100%", md:"100%", lg:"100%"},   gap:{xs:"50px", sm:"20px", md:"10px" } }}>
         
         <Card sx={{height:{xs:"60vh", sm:"35%", md:"100%" }, padding:"20px", width:{xs:"70vw", sm:'90%', md:"50%", lg:"40%"},  alignItems:"center", border:"1px solid #000000",  borderRadius:"10px"}}>
         <Box mb="25px" >
          <Typography variant="p" component="h3" sx={{fontSize:"1rem"}}>Today’s Course</Typography>
          <span style={{fontSize:"0.7rem", color:"#B5B5B5",}}>0 lessons, 0 hours 0 minutes</span>
          </Box>
          <Box sx={{ justifyContent:"space-between", marginTop:"20px"}}>

          <CircularWithValueLabel  />
          <Typography variant="p" component="h4" sx={{alignItems:"center", marginBottom:"0.5rem", marginLeft:{xs:"5rem", sm:"5rem", md:"5rem", lg:"5rem"}, marginTop:"-5.2rem", width:"9rem", display:"flex", height:"1.5rem",fontSize:{xs:"0.9rem", sm:"0.9rem", md:"0.9rem", lg:"1rem"}, paddingRight:"20px",  textAlign:"center", justifyContent:"center"}}>Product Design</Typography>
          <Box sx={{display:"flex",direction:"row", height:"4.5rem", width:"64%",  justifyContent:"space-between", marginLeft:"5.2rem", marginTop:"-0.1rem"}}>
          <DashboardProductInfo  />
          </Box>
          <Typography variant="span" component="button" sx={{padding:"10px", cursor:"pointer", background:"#D8E0F8", border:"none", width:{xs: "30%", sm:"40%", md:"35%", lg:"42%"}, borderRadius:"8px", fontWeight:"700", fontSize:"0.7rem",  color:"#B5B5B5",}}>Skip this</Typography>
          
          <Typography variant="span" component="button" sx={{padding:"10px",boxShadow: "-2px 0px 15px #131F45", marginLeft:"6px", width:{xs: "30%", sm:"35%", md:"30%", lg:"35%"}, cursor:"pointer", background:"#131F45", border:"none", borderRadius:"8px", fontWeight:"700", fontSize:"0.7rem", color:"#FFFFFF",}}>Continue</Typography>
          </Box>


         </Card>

         <Card sx={{height:{xs:"60vh", sm:"35%", md:"100%",  }, padding:"20px", width:{xs:"70vw", sm:'90%', md:"50%", lg:"40%"},  alignItems:"center", border:"1px solid #000000",  borderRadius:"10px"}}>
         <Box mb="25px" >
          <Typography variant="p" component="h3" sx={{fontSize:"1rem"}}>Today’s Event</Typography>
          <span style={{fontSize:"0.7rem", color:"#B5B5B5",}}>0 lessons, 0 hours 0 minutes</span>
          </Box>
          <Box sx={{ justifyContent:"space-between", marginTop:"20px"}}>

          <CircularWithValueLabel />
          <Typography variant="p" component="h4" sx={{alignItems:"center", marginBottom:"0.5rem", marginLeft:"5rem", marginTop:"-5.2rem", width:"9rem", display:"flex", height:"1.5rem",fontSize:{xs:"0.9rem", sm:"0.9rem", md:"0.9rem", lg:"1rem"}, paddingRight:"20px",  textAlign:"center", justifyContent:"center"}}>Product Design</Typography>
          <Box sx={{display:"flex",direction:"row", height:"4.5rem", width:"64%",  justifyContent:"space-between", marginLeft:"5.2rem", marginTop:"-0.1rem"}}>
          <DashboardProductInfo />
          </Box>
          <Typography variant="span" component="button" sx={{padding:"10px", cursor:"pointer", background:"#D7EAF8", border:"none", width:{xs: "30%", sm:"25%", md:"25%", lg:"35%"}, borderRadius:"8px", fontWeight:"700", fontSize:"0.7rem", color:"#B5B5B5",}}>Details</Typography>
          
          <Typography variant="span" component="button" sx={{padding:{xs:"10px"},boxShadow: "-2px 0px 15px #599FD5", marginLeft:"6px", width:{xs: "35%", sm:"40%", md:"35%", lg:"45%"}, cursor:"pointer", background:"#599FD5", border:"none", borderRadius:"8px", fontWeight:"700", fontSize:"0.7rem", color:"#FFFFFF",}}>Join event</Typography>
          </Box>


         </Card>

         </Box>
          <Box  sx={{height:{xs:"50%", sm:"50%", md:"54%"}, alignItems:"center", marginTop:"25px", display:"flex", borderRadius:"10px", width:{xs:"93vw", sm:'100%', md:"100%"}, border:"1px solid black",  gap:"10px"  }}>
          
          </Box>
         
        </Box>
        <DashboardRightbar />
      </Stack>
    </Box>
  );
}; 

export default Dashboard;
