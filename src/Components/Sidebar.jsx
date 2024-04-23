import React from 'react'
import {  AccountCircle, AccountCircleOutlined, Description, DescriptionOutlined, GridView, LibraryAdd,  RecordVoiceOverOutlined,  ReduceCapacityOutlined, Today, WhatsApp,  } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import StyledBadge from '@mui/material/Badge';
import logo from "../Images/logo.png"


const Sidebar = () => {
  return (
    <Box  flex={1} p={2} sx={{display:{xs:"none", sm:"block"}}}>
      <Box display='flex' sx={{ width:"137.44px", height:"59.53px", gap:"4px"}} >

              <img src={logo} alt="logo"  />
      <Typography sx={{width:"75.61px", height:"36px", fontFamily:"inter, sans-serif",  fontWeight:"600", fontSize:"10px", color:"#131F45"}}>Building Innovations, Empowering Change.</Typography>
      </Box>
      <Typography paddingTop="5rem" sx={{color:"#000000", fontWeight:"500"}} >MAIN MENU</Typography>
         <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="Dashboard">
              <ListItemIcon>
               <GridView />
              </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItemButton>
          </ListItem>
         </List> 
         <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="Profile">
              <ListItemIcon>
               <AccountCircleOutlined />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
         </List> 
         <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="facilitator">
              <ListItemIcon>
               <RecordVoiceOverOutlined />
              </ListItemIcon>
              <ListItemText primary="Facilitator" />
            </ListItemButton>
          </ListItem>
         </List> 
         <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="courses">
              <ListItemIcon>
               <LibraryAdd />
              </ListItemIcon>
              <ListItemText primary="Courses" />
            </ListItemButton>
          </ListItem>
         </List> 
         <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="resources">
              <ListItemIcon>
               <DescriptionOutlined />
              </ListItemIcon>
              <ListItemText primary="Resources" />
            </ListItemButton>
          </ListItem>
         </List> 
         <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="Chat">
              <ListItemIcon>
               <WhatsApp />
              </ListItemIcon>
              <ListItemText primary="Chats" />
              <StyledBadge badgeContent={3} color="error"></StyledBadge>
            </ListItemButton>
          </ListItem>
         </List> 
         <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="Calendar">
              <ListItemIcon>
               <Today />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
             
            </ListItemButton>
          </ListItem>
         </List> 


    </Box>
  )
}

export default Sidebar