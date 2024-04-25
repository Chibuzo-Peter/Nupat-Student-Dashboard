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

        <iframe src="https://calendar.google.com/calendar/embed?height=255&wkst=1&ctz=Africa%2FLagos&bgcolor=%233F51B5&mode=MONTH&showPrint=0&showTabs=0&showTz=0&src=ZmQ3NTFhM2ZhNDI3MjZlMTFkYjk3MmE1MDAxMDMxN2Q2NzRiYTc3ZmFhNjg3ZGExMjI1NjA5MzNlZTYxYjk2NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4ubmcjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23A79B8E&color=%234285F4" style={{borderWidth:"0", width:"333", height:"255", frameborder:"0", scrolling:"no"}}></iframe>


        </Stack>
    </Box>
  )
}

export default Calendar