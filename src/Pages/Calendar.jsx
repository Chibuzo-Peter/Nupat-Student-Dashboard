import React from 'react'
import Rightbar from '../Components/Rightbar'
import Feeds from '../Components/Feeds'
import Sidebar from '../Components/Sidebar'
import { Box, Container, Stack } from '@mui/material'
import Navbar from '../Components/Navbar'

const Calendar = () => {
  return (
    <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between" >
        <Sidebar />
        <Container sx={{width:"100%",  padding:"20px", margin:"15px 0", }}>
          
        <iframe src="https://calendar.google.com/calendar/embed?height=391&wkst=1&ctz=Africa%2FLagos&bgcolor=%23039BE5&showPrint=0&showTabs=0&src=MWEzY2RiYmNkNGM3OTdjYjRlZWMyYWI1YmYzNmYyNzRhMjZhYjk0NThmMTIzNzI1MTE3OGViYmUyZWUyOWJlZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4ubmcjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%238E24AA&color=%230B8043" style={{borderWidth:"0", '&:hover':{bgcolor:"#CBD5F4" }, cursor:"pointer", width:"70%", height:"80vh", frameborder:"0", scrolling:"no"}}></iframe>
        </Container>
        
        <Rightbar />


        </Stack>
    </Box>
  )
}

export default Calendar