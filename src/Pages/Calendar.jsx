import React from 'react'
import Rightbar from '../Components/Rightbar'
import Feeds from '../Components/Feeds'
import Sidebar from '../Components/Sidebar'
import { Box, Stack } from '@mui/material'
import Navbar from '../Components/Navbar'

const Calendar = () => {
  return (
    <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between" >

            <Sidebar />
            <Feeds word="Calendar" />
            <Rightbar />


        </Stack>
    </Box>
  )
}

export default Calendar