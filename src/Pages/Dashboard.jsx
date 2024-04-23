import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Feeds from '../Components/Feeds'
import Rightbar from '../Components/Rightbar'
import { Box, Stack } from '@mui/material'


const Dashboard = () => {
  return (
    <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between" >

            <Sidebar />
            <Feeds word="Dashboard" />
            <Rightbar />


        </Stack>
    </Box>
  )
}

export default Dashboard