import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import  figmaLogo from "../Images/figmaLogo.png"
import  pinkLine from "../Images/pinkLine.png"
import miroLogo from "../Images/dataResrcLogo.png"
import yellowLine from "../Images/yellowLine.png"



const DashboardRightbar = () => {
  return ( 
    <Box flex={2} p={2} sx={{display:{xs:"none", sm:"block"}}}>
        <Box sx={{display:"flex", }}>
            < Container sx={{flexDirection:"row", lineHeight:"1px"}}>
            <Typography variant='h5' component="p" sx={{fontFamily:"inter, sans-serif", fontWeight:"700",}}>Active Lessons </Typography>
            <Typography variant='span' sx={{fontSize:"12px", fontFamily:"inter, sans-serif", fontWeight:"600", lineHeight:"16px"}}>Average 75% completed lessons.</Typography> 
            </Container> 
            <Typography sx={{width:"120px", height:"32px",  bgcolor:"#0254A0", borderRadius:"5px", padding:"4px", fontSize:"13px", fontFamily:"inter, sans-serif", color:"#FFFFFF", fontWeight:"600"}}>All Lessons </Typography>
            
        </Box>
        <Box sx={{display:"flex",  alignItem:"center", marginBlockStart:"30px", padding:"10px", bgcolor:"#FFFFFF",  width:"100%" }}>
            
            <img src={figmaLogo} alt='figmalogo' height="40.53px"  />
            
            < Container sx={{flexDirection:"row", lineHeight:"0.5px"}}>
            <Typography variant='h6' component="p" sx={{fontFamily:"inter, sans-serif",  fontSize:"15px", fontWeight:"700",}}>Introduction </Typography>
            <Typography variant='span' sx={{fontSize:"14px", color:"#B7B6B6", fontFamily:"inter, sans-serif", fontWeight:"600", lineHeight:"16px"}}>Figma</Typography> 
            </Container>
            <Container>
            <img src={pinkLine} alt="test Line" width="150.81px" height="6px"/>
            </Container>    
            <Typography sx={{fontFamily:"inter, sans-serif", fontWeight:"600", fontSize:"18px"}}>0%</Typography>
                        

        </Box>
        <Box sx={{display:"flex",  marginRight:"80px", alignItem:"left",  marginBlockStart:"30px", padding:"10px", bgcolor:"#FFFFFF",  width:"100%" }}>
            
            <img src={miroLogo} alt='figmalogo' height="40.53px"  />
            
            < Container >
            <Typography variant='h6' component="p" sx={{fontFamily:"inter, sans-serif", display:"flex", flexDirection:"column", fontSize:"15px", fontWeight:"700",}}>Data Resources </Typography>
            <Typography variant='span' sx={{fontSize:"14px", color:"#B7B6B6", fontFamily:"inter, sans-serif", fontWeight:"600", lineHeight:"16px"}}>Miro</Typography> 
            </Container>
            <Container>
            <img src={yellowLine} alt="test Line" width="150.81px" height="6px"/>
            </Container>    
            <Typography sx={{fontFamily:"inter, sans-serif", fontWeight:"600", fontSize:"18px"}}>0%</Typography>
                        

        </Box>
        <Box sx={{display:"flex",  marginRight:"80px", alignItem:"left",  marginBlockStart:"30px", padding:"10px", bgcolor:"#FFFFFF",  width:"100%" }}>
            
            <img src={miroLogo} alt='figmalogo' height="40.53px"  />
            
            < Container >
            <Typography variant='h6' component="p" sx={{fontFamily:"inter, sans-serif", display:"flex", flexDirection:"column", fontSize:"15px", fontWeight:"700",}}>Data Resources </Typography>
            <Typography variant='span' sx={{fontSize:"14px", color:"#B7B6B6", fontFamily:"inter, sans-serif", fontWeight:"600", lineHeight:"16px"}}>Miro</Typography> 
            </Container>
            <Container>
            <img src={yellowLine} alt="test Line" width="150.81px" height="6px"/>
            </Container>    
            <Typography sx={{fontFamily:"inter, sans-serif", fontWeight:"600", fontSize:"18px"}}>0%</Typography>
                        

        </Box>





    </Box>
  )
}

export default DashboardRightbar