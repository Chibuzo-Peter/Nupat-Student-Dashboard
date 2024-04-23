import React from 'react'
import {  AccountCircle, AccountCircleOutlined, Description, DescriptionOutlined, GridView, LibraryAdd,  RecordVoiceOverOutlined,  ReduceCapacityOutlined, Today, WhatsApp,  } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import StyledBadge from '@mui/material/Badge';
import logo1 from '../Images/logo1.png'
const Sidebar = () => {
  return (
    <Box  flex={1} p={2} sx={{display:{xs:"none", sm:"block"}}}>
      <img src="../images/image.png" alt="logo" />
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
            <ListItemButton component="a" href="Chats">
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