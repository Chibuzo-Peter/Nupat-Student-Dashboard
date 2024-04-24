import React from 'react'
import Rightbar from '../Components/Rightbar'
import Feeds from '../Components/Feeds'
import Sidebar from '../Components/Sidebar'
import { Box, Stack } from '@mui/material'
import Navbar from '../Components/Navbar'

const Profile = () => {
  return (
    <Box>
        <Navbar />
        <Stack direction="row" spacing={1} justifyContent="space-between" bgcolor="#fff">

            <Sidebar />
            <Feeds word="Profile" bgcolor="#FFF"/>
            <Rightbar />


        </Stack>
    </Box>
  )
}

export default Profile