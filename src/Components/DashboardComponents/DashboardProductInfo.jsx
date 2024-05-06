import React from 'react'
import { Box } from '@mui/material'
import arrow from '../../Images/arrowdot.png'
const DashboardProductInfo = () => {
  return (
    <Box sx={{display:"flex",}}>
    <div>
      <Box sx={{display:"flex",marginLeft:"8px", justifyContent:"start", marginTop:"6px", flexDirection:"row"}} >
      
      <img src={arrow} style={{width:"15px", }}  alt="" />
      <span style={{fontSize:{xs:"0.6rem", sm:"0.6rem", md:"0.6rem", lg:"1rem"}, color:"#B5B5B5", fontWeight:"700", marginLeft:"6px"}}> 0 Topics</span>
      </Box>
      <Box sx={{display:"flex", marginLeft:"8px", justifyContent:"start", height:"1rem", width:"100%",marginTop:"6px", flexDirection:"row"}} >
      
      <img src={arrow} style={{width:"15px", }}  alt="" />
      <span style={{fontSize:{xs:"0.6rem", sm:"0.6rem", md:"0.6rem", lg:"1rem"}, color:"#B5B5B5", fontWeight:"700", marginLeft:"7px"}}>0  </span>
      <span style={{fontSize:{xs:"0.6rem", sm:"0.6rem", md:"0.6rem", lg:"1rem"}, color:"#B5B5B5", fontWeight:"700", marginLeft:"7px"}}> Speakers </span>
      </Box>
   
    </div>
    <div>
    <Box sx={{display:"flex", marginLeft:"4px", justifyContent:"start", height:"1rem", width:"100%",marginTop:"6px", flexDirection:"row"}} >
      
      <img src={arrow} style={{width:"15px", }}  alt="" />
      <span style={{fontSize:{xs:"0.6rem", sm:"0.6rem", md:"0.6rem", lg:"1rem"}, color:"#B5B5B5", fontWeight:"700", marginLeft:"6px"}}>0  </span>
      <span style={{fontSize:{xs:"0.6rem", sm:"0.6rem", md:"0.6rem", lg:"1rem"}, color:"#B5B5B5", fontWeight:"700", marginLeft:"6px"}}> Mins </span>
      </Box>
      <Box sx={{display:"flex", marginLeft:"7px", justifyContent:"start", height:"1rem", width:"100%",marginTop:"6px", flexDirection:"row"}} >
      
      <img src={arrow} style={{width:"15px", }}  alt="" />
      <span style={{fontSize:{xs:"0.6rem", sm:"0.6rem", md:"0.6rem", lg:"1rem"}, color:"#B5B5B5", fontWeight:"700", marginLeft:"6px"}}>0  </span>
      <span style={{fontSize:{xs:"0.6rem", sm:"0.6rem", md:"0.6rem", lg:"1rem"}, color:"#B5B5B5", fontWeight:"700", marginLeft:"6px"}}> Students </span>
      </Box>
   
    </div>
    </Box>
  )
}

export default DashboardProductInfo
