import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import  figmaLogo from "../../Images/figmaLogo.png"
import miroLogo from "../../Images/dataResrcLogo.png"
import yellowLine from "../../Images/yellowLine.png"
import aiLogo from "../../Images/aiLogo.png"
import redLine from "../../Images/aiLine.png"
import psLogo from "../../Images/photoshopLogo.png"
import blueLine from "../../Images/blueLine.png"
import purpleLine from "../../Images/purpleLine.png"
import xdLogo from "../../Images/indesignLogo.png"
import CalendarGfg from '../Calendar'
import LinearProgresss, { LinearProgressWithLabel } from './RightDashboardPercentage'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Theme} from "../RightDashboard/RightDashboardPercentage"

const DashboardRightbar = () => {
    

  return ( 
    <Box flex={{ xs: 1, sm:1.2 , md: 1.3, lg: 2, xl: 2 }} p={2} sx={{display:{xs:"none", sm:"block"}}}>

       <Container sx={{border:"2px solid #B7B6B6", borderRadius:"20px"}}>

        <Box sx={{display:"flex", width:"100%"}}>
            < Container sx={{flexDirection:"row", lineHeight:"1px"}}>
            <Typography variant='h5' component="p" sx={{fontFamily:"inter, sans-serif", fontWeight:"700",}}>Active Lessons </Typography>
            <Typography variant='span' sx={{fontSize:"12px", fontFamily:"inter, sans-serif", fontWeight:"600", lineHeight:"16px"}}>Average 75% completed lessons.</Typography> 
            </Container> 
            <Typography component="button" sx={{width:"120px", margin:"5px", cursor:"pointer", height:"32px",  bgcolor:"#0254A0", borderRadius:"5px", padding:"5px", fontSize:"13px", fontFamily:"inter, sans-serif", color:"#FFFFFF", fontWeight:"600"}}>All Lessons </Typography>
            
        </Box>
        <Box sx={{display:"flex",  alignItem:"center", marginBlockStart:"30px", padding:"10px", bgcolor:"#FFFFFF",  width:"100%" }}>
            
            <img src={figmaLogo} alt='figmalogo' height="40.53px"  />
            
            < Container sx={{flexDirection:"row", lineHeight:"0.5px"}}>
            <Typography variant='h6' component="p" sx={{fontFamily:"inter, sans-serif",  fontSize:"15px", fontWeight:"700",}}>Introduction </Typography>
            <Typography variant='span' sx={{fontSize:"14px", color:"#B7B6B6", fontFamily:"inter, sans-serif", fontWeight:"600", lineHeight:"16px"}}>Figma</Typography> 
            </Container>
            
                 <LinearProgresss  color="error" />
                
                        

        </Box>
        <Box sx={{display:"flex",  marginRight:"80px", alignItem:"left",  marginBlockStart:"30px", padding:"10px", bgcolor:"#FFFFFF",  width:"100%" }}>
            
            <img src={miroLogo} alt='figmalogo' height="40.53px"  />
            
            < Container >
            <Typography variant='h6' component="p" sx={{fontFamily:"inter, sans-serif", display:"flex", flexDirection:"column", fontSize:"15px", fontWeight:"700",}}>Data Resources </Typography>
            <Typography variant='span' sx={{fontSize:"14px", color:"#B7B6B6", fontFamily:"inter, sans-serif", fontWeight:"600", lineHeight:"16px"}}>Miro</Typography> 
            </Container>
           
                 <LinearProgresss  color="error" />
                

        </Box>
        <Box sx={{display:"flex",  marginRight:"80px", alignItem:"left",  marginBlockStart:"30px", padding:"10px", bgcolor:"#FFFFFF",  width:"100%" }}>
            
            <img src={aiLogo} alt='figmalogo' height="40.53px"  />
            
            < Container >
            <Typography variant='h6' component="p" sx={{fontFamily:"inter, sans-serif", display:"flex", flexDirection:"column", fontSize:"15px", fontWeight:"700",}}>Layout Design </Typography>
            <Typography variant='span' sx={{fontSize:"14px", color:"#B7B6B6", fontFamily:"inter, sans-serif", fontWeight:"600", lineHeight:"16px"}}>illustrator</Typography> 
            </Container>
           
                 <LinearProgresss  color="warning" />
                   

        </Box>
        <Box sx={{display:"flex",  marginRight:"80px", alignItem:"left",  marginBlockStart:"30px", padding:"10px", bgcolor:"#FFFFFF",  width:"100%" }}>
            
            <img src={psLogo} alt='figmalogo' height="40.53px"  />
            
            < Container >
            <Typography variant='h6' component="p" sx={{fontFamily:"inter, sans-serif", display:"flex", flexDirection:"column", fontSize:"15px", fontWeight:"700",}}>Drawing & Editing </Typography>
            <Typography variant='span' sx={{fontSize:"14px", color:"#B7B6B6", fontFamily:"inter, sans-serif", fontWeight:"600", lineHeight:"16px"}}>Drawing & Editing</Typography> 
            </Container>
          
                 <LinearProgresss  color="info" />
                     

        </Box>
        <Box sx={{display:"flex",  marginRight:"80px", alignItem:"left",  marginBlockStart:"30px", padding:"10px", bgcolor:"#FFFFFF",  width:"100%" }}>
            
            <img src={aiLogo} alt='figmalogo' height="40.53px"  />
            
            < Container >
            <Typography variant='h6' component="p" sx={{fontFamily:"inter, sans-serif", display:"flex", flexDirection:"column", fontSize:"15px", fontWeight:"700",}}>Layout Design </Typography>
            <Typography variant='span' sx={{fontSize:"14px", color:"#B7B6B6", fontFamily:"inter, sans-serif", fontWeight:"600", lineHeight:"16px"}}>illustrator</Typography> 
            </Container>
           
                 <LinearProgresss  color="warning" />
                      

        </Box>
        <Box sx={{display:"flex",  marginRight:"80px", alignItem:"left", marginBottom:"8px",  marginBlockStart:"30px", padding:"10px", bgcolor:"#FFFFFF",  width:"100%" }}>
            
            <img src={xdLogo} alt='figmalogo' height="40.53px"  />
            
            < Container >
            <Typography variant='h6' component="p" sx={{fontFamily:"inter, sans-serif", display:"flex", flexDirection:"column", fontSize:"15px", fontWeight:"700",}}>Indesign </Typography>
            <Typography variant='span' sx={{fontSize:"14px", color:"#B7B6B6", fontFamily:"inter, sans-serif", fontWeight:"600", lineHeight:"16px"}}>Adobe Xd</Typography> 
            </Container>
           
                 <LinearProgresss  color="secondary" />
                    

        </Box>
       </Container>

       <Container sx={{border:"2px solid #B7B6B6 ", display:"flex",   paddingInline:"50px", width:"100%", marginBlock:"15px", padding:"20px", margin:"15px 0", boxSizing:"border-box", borderRadius:"20px", justifyContent:"center", alignItems:"center"}}>
       <CalendarGfg />
       </Container>



    </Box>
  )
}

export default DashboardRightbar