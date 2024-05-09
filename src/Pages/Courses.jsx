import React from 'react'
import Rightbar from '../Components/Rightbar'
import Feeds from '../Components/Feeds'
import Sidebar from '../Components/Sidebar/Sidebar'
import { Box, Stack } from '@mui/material'
import Navbar from '../Components/Navbar'

const Courses = () => {
  return (
    <>
    <Navbar />
    <div style={{display:"flex", flexDirection:"row", alignItems:"space-between", paddingTop:"1%", backgroundColor:"#eee"}}>
        <Sidebar />
        <div style={{width:"50%", paddingInline:"20px"}} >Courses are displayed here</div>

        <div style={{width:"25%", marginInline:"20px"}} >This is the right bar</div>


    </div>
</>
  )
}

export default Courses