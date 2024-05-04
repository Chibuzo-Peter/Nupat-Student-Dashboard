import { Box, Card, CardContent, Stack } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { Edit } from '@mui/icons-material'
import ProfilePic from '../Images/Profile photo.png'

const EditProfile = () => {
  return (
    <div className=''>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between" >
        <Sidebar style={{ display: { xs: "none", sm: "none", md: "none" } }} />
            <Box>
            <Card
            style={{
              width: "100%",
              maxWidth: "100%",
              borderRadius: "15px",
              background: "#F4F4F4",
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
            <span>
              <Edit
                sx={{
                  position: "absolute",
                  top: "15vh",
                  left: "57vw",
                  color: "#fff",
                  cursor: "pointer",
                  backgroundColor:"#fff"
                }}
              />
            </span>
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
                    top: "-17vh",
                    color: "#000",
                    zIndex: "10",
                    cursor: "pointer"
                  }}
                />
              </span>
              <div style={{ marginLeft: "10px", marginTop:"-50px" }}>
                <h4>
                  Your photo
                </h4>
                
                <small>
                This will be displayed 
                  
                </small>
                <div><button>Upload new</button><button>Save</button></div>
              </div>
            </CardContent>
          </Card>


            </Box>

        </Stack>
    </div>
  )
}

export default EditProfile