import React from 'react'
import Rightbar from '../Components/Rightbar'
import Feeds from '../Components/Feeds'
import Sidebar from '../Components/Sidebar/Sidebar'
import { Box, Stack } from '@mui/material'
import Navbar from '../Components/Navbar'

const Facilitator = () => {
  return (
    <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between" >

            <Sidebar />
            <Feeds word="facilitator" />
            <Rightbar />


        </Stack>
    </Box>
  )
}

export default Facilitator