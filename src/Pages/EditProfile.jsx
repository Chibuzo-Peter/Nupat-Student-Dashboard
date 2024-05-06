import { Box, ButtonBase, Card, CardContent, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import { Edit } from '@mui/icons-material'
import ProfilePic from '../Images/Profile photo.png'
import '../Components/IndustryAndInterest'
import { IndustryAndInterest } from '../Components/IndustryAndInterest'

const EditProfile = () => {
  return (
    <div className=''>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between" sx={{backgroundColor:"#eee", display:{xs:"block", sm:"block", md:"block"}}}>
        <Sidebar style={{ display: { xs: "none", sm: "none", md: "none" } }} />
            <Box sx={{width:"50vw", display: { xs: "block", sm: "block", md: "block", width:"100%"} }}>
            <Card
            style={{
              width: "100%",
              maxWidth: "100%",
              borderRadius: "15px",
              background: "#F4F4F4",
              marginTop:"30px"
            }}
          >
            <div
                style={{
                height: "25vh",
                width: "100%",
                objectFit: "cover",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
                backgroundColor:"#131f45"
              }}
            />
           
            <CardContent>
              <img
                src={ProfilePic}
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  position: "relative",
                  top: "-61px",
                  left: "14px",
                }}
              />
              <span>
                <Edit
                  sx={{
                    marginLeft: "30vw",
                    position: "relative",
                    top: "-25vh",
                    color: "#fff",
                    left:"10vw",
                    cursor: "pointer",
                    display:{xs:"block", top:"inline"}
                  }}
                />
              </span>
              <div style={{ marginLeft: "10px", marginTop:"-50px" }}>
                <h4>
                  <strong>Your photo</strong>
                </h4>
                <small>
                This will be displayed on your profile
                </small>
                <div marginTop="10px">
                  <button style={{backgroundColor:"#131f45", borderRadius:"10px", padding:"5px", marginRight:"10px", color:"#fff"}}>Upload New</button><button style={{backgroundColor:"#131f45", borderRadius:"10px", padding:"5px", marginLeft:"10px", color:"#fff"}}>Save</button>
                </div>
              </div>
            </CardContent>
          </Card>
          <form style={{backgroundColor:"#fff", height:"70vh", weight:"40vw", marginTop:"60px", padding:"20px", borderRadius:"5px"}}>
                  <h2><strong>Personal Information</strong></h2>
                  <label type="text">Full Name</label><br />
                  <input type="text" style={{border:"1px solid grey", width:"100%", borderRadius:"5px", padding:"5px 10px", marginBottom:"15px"}} />
                  <label type="text">Email Address</label><br />
                  <input type="email" style={{border:"1px solid grey", width:"100%", borderRadius:"5px", padding:"5px 10px", marginBottom:"15px"}} />
                  <label type="text">Phone</label><br />
                  <input type="number" style={{border:"1px solid grey", width:"100%", borderRadius:"5px", padding:"5px 10px", marginBottom:"15px"}} />
                  <label type="text">Home Address</label><br />
                  <input type="text" style={{border:"1px solid grey", width:"100%", borderRadius:"5px", padding:"5px 10px", marginBottom:"15px"}} />
                  <label type="text">Course of Interest</label><br />
                  <input type="text" style={{border:"1px solid grey", width:"100%", borderRadius:"5px", padding:"5px 10px", marginBottom:"15px"}} />
          </form>


            </Box>
            <Box sx={{width:"40vw", display: { xs: "block", sm: "block", md: "block", width:"100%" } }}>
              <h3 style={{marginTop:"30px"}}><strong>Bio</strong></h3>
              <span><Edit
                sx={{
                  top:"105vh",
                  position: "absolute",
                  left: "95vw",
                  color: "#000",
                  cursor: "pointer",
                  backgroundColor:"grey",
                  borderRadius:"50%",
                  padding:"3px",
                  display:{xs:"block", top:"inline", left:"80%"}
                }}
              /></span>
              <div style={{backgroundColor:"#fff", height:"20vh", width:"90%", marginTop:"10px", borderRadius:"10px"}}></div>

              <div style={{marginTop:" 20%"}}>
                <h3 style={{fontSize:"1rem"}}><strong>Industry/Interest</strong></h3>
                {IndustryAndInterest.map((interest) => (
                <button style={{backgroundColor:"lightblue", paddingInline:"5px", borderRadius:"5px", marginRight:"10px", marginBottom:"10px"}} key={interest.id} >{interest.interest} {interest.remov}</button>

                ))}
              </div>
            </Box>

        </Stack>
    </div>
  )
}

export default EditProfile