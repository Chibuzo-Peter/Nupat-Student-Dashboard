import { Box, Card, CardContent, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { Edit } from '@mui/icons-material'
import ProfilePic from '../Images/Profile photo.png'
import Button from '../Components/Button'

const EditProfile = () => {
  return (
    <div className=''>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between" sx={{backgroundColor:"#eee"}}>
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
                This will be displayed on your profile
                </small>
                {/* <div><Button>Upload new</Button><Button>Save</Button></div> */}
              </div>
            </CardContent>
          </Card>
          <form className='h-10 w-6 bg-white'>

          </form>


            </Box>

        </Stack>
    </div>
  )
}

export default EditProfile