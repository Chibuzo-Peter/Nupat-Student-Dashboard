import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Feeds from '../Components/Feeds'
import { Box, Stack } from '@mui/material'
import DashboardRightbar from '../Components/DashboardRightbar'


const Dashboard = () => {
  return (
    <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between" >

            <Sidebar />
            <Feeds word="Dashboard" />
            <DashboardRightbar />


        </Stack>
    </Box>
  )
}

export default Dashboard