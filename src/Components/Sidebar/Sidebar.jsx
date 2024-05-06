import React from 'react'
import {  AccountCircle, AccountCircleOutlined, Description, DescriptionOutlined, GridView, GridViewRounded, LibraryAdd,  Logout,  Padding,  RecordVoiceOverOutlined,  ReduceCapacityOutlined, SettingsOutlined, Today, WhatsApp,  } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import StyledBadge from '@mui/material/Badge';
import logo from "../../Images/logo.png"


const Sidebar = () => {
  return (
    <Box  flex={1} p={2}   overflowX='hidden' minH='100%' sx={{display:{xs:"none", sm:"block"},  flexWrap:"wrap", width:{sm:"5%", md:"30%"},  height:"100%", m:"0", borderRight:" 1px solid #B7B6B6"}}>
     <Box   >

      <Box display='flex' sx={{ width:"137.44px",  margin:"0", height:"100px", gap:"4px"}} >

              <img src={logo} alt="logo"  />
      <Typography  sx={{width:"90.61px", height:"40px",paddingTop:"15px", display:{sm:"none", md:"block"}, fontFamily:"inter, sans-serif",  fontWeight:"600", fontSize:"10px", color:"#131F45"}}>Building Innovations, Empowering Change.</Typography>
      </Box>

      <Typography variant='p1' component="h3" paddingTop="1.5rem" sx={{color:"#000000", paddingBottom:"3rem", fontFamily:"inter, sans-serif", fontWeight:"500"}} >MAIN MENU</Typography>

         <List sx={{bgcolor:"#FFFFFF",   marginBlock:"15px", '&:hover':{bgcolor:"#CBD5F4" },  borderRadius:'10px', display:"flex", flexDirection:"column",   width:"100%",  paddingBottom:"3rem", Padding:'8.01px, 12.02px, 8.01px, 12.02px',height:"20px",  gap:"45px"}}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="Dashboard">
              <ListItemIcon >
               <GridViewRounded />
              </ListItemIcon>
              <ListItemText primary="Overview" sx={{display:{sm:"none", md:"block"}}} />
            </ListItemButton>
          </ListItem>
         </List> 
         <List sx={{bgcolor:"#FFFFFF", marginBlock:"15px", '&:hover':{bgcolor:"#CBD5F4" },  borderRadius:'10px', display:"flex", flexDirection:"column",   width:"100%",  paddingBottom:"3rem", Padding:'8.01px, 12.02px, 8.01px, 12.02px',height:"20px",  gap:"45px" }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="Profile">
              <ListItemIcon>
               <AccountCircleOutlined />
              </ListItemIcon>
              <ListItemText primary="Profile" sx={{display:{sm:"none", md:"block"}}} />
            </ListItemButton>
          </ListItem>
         </List> 
         <List sx={{bgcolor:"#FFFFFF", marginBlock:"15px", '&:hover':{bgcolor:"#CBD5F4" },  borderRadius:'10px', display:"flex", flexDirection:"column",   width:"100%",  paddingBottom:"3rem", Padding:'8.01px, 12.02px, 8.01px, 12.02px',height:"20px",  gap:"45px" }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="facilitator">
              <ListItemIcon>
               <RecordVoiceOverOutlined />
              </ListItemIcon>
              <ListItemText primary="Facilitator" sx={{display:{sm:"none", md:"block"}}} />
            </ListItemButton>
          </ListItem>
         </List> 
         <List sx={{bgcolor:"#FFFFFF", marginBlock:"15px", '&:hover':{bgcolor:"#CBD5F4" },  borderRadius:'10px', display:"flex", flexDirection:"column",   width:"100%",  paddingBottom:"3rem", Padding:'8.01px, 12.02px, 8.01px, 12.02px',height:"20px",  gap:"45px" }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="courses">
              <ListItemIcon>
               <LibraryAdd />
              </ListItemIcon>
              <ListItemText primary="Courses" sx={{display:{sm:"none", md:"block"}}} />
            </ListItemButton>
          </ListItem>
         </List> 
         <List sx={{bgcolor:"#FFFFFF", marginBlock:"15px", '&:hover':{bgcolor:"#CBD5F4" },  borderRadius:'10px', display:"flex", flexDirection:"column",   width:"100%",  paddingBottom:"3rem", Padding:'8.01px, 12.02px, 8.01px, 12.02px',height:"20px",  gap:"45px" }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="resources">
              <ListItemIcon>
               <DescriptionOutlined />
              </ListItemIcon>
              <ListItemText primary="Resources" sx={{display:{sm:"none", md:"block"}}} />
            </ListItemButton>
          </ListItem>
         </List> 
         <List sx={{bgcolor:"#FFFFFF", marginBlock:"15px", '&:hover':{bgcolor:"#CBD5F4" },  borderRadius:'10px', display:"flex", flexDirection:"column",   width:"100%",  paddingBottom:"3rem", Padding:'8.01px, 12.02px, 8.01px, 12.02px',height:"20px",  gap:"45px" }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="Chat">
              <ListItemIcon>
               <WhatsApp />
              </ListItemIcon>
              <ListItemText primary="Chats" sx={{display:{sm:"none", md:"block"}}} />
              <StyledBadge badgeContent={3}  sx={{display:{sm:"none", md:"block"}}} color="error" />
              <StyledBadge badgeContent={3}  sx={{display:{sm:"block", md:"none"}, position:"absolute", top:"0.2px"}} color="error" />
            </ListItemButton>
          </ListItem>
         </List> 
         <List sx={{bgcolor:"#FFFFFF", marginBlock:"15px", '&:hover':{bgcolor:"#CBD5F4" },  borderRadius:'10px', display:"flex", flexDirection:"column",   width:"100%",  paddingBottom:"3rem", Padding:'8.01px, 12.02px, 8.01px, 12.02px',height:"20px",  gap:"45px" }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="Calendar">
              <ListItemIcon>
               <Today />
              </ListItemIcon>
              <ListItemText primary="Calendar" sx={{display:{sm:"none", md:"block"}}} />
             
            </ListItemButton>
          </ListItem>
         </List> 


         <List sx={{bgcolor:"#FFFFFF", marginTop:"100%",   '&:hover':{bgcolor:"#CBD5F4" },  borderRadius:'10px', display:"flex", flexDirection:"column",   width:"100%",  paddingBottom:"3rem", Padding:'8.01px, 12.02px, 8.01px, 12.02px',height:"20px",  gap:"45%" }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="Settings">
              <ListItemIcon>
               <SettingsOutlined />
              </ListItemIcon>
              <ListItemText primary="Settings" sx={{display:{sm:"none", md:"block"}}} />
             
            </ListItemButton>
          </ListItem>
         </List> 
         <List sx={{bgcolor:"#FFFFFF",color:"#ED4A4A",  marginBlock:"15px", '&:hover':{bgcolor:"#CBD5F4" }, display:"flex", flexDirection:"column",   width:"100%", borderRadius:'10px', paddingBottom:"3rem", Padding:'8.01px, 12.02px, 8.01px, 12.02px', height:"20px",  gap:"45px" }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
               <Logout />
              </ListItemIcon>
              <ListItemText primary="Sign out"  sx={{display:{sm:"none", md:"block"}}} />
             
            </ListItemButton>
          </ListItem>
         </List> 

     </Box>

    </Box>
  )
}

export default Sidebar