import { Box, Typography } from '@mui/material'
import React from 'react'

const Feeds = (props) => {
  return (
    <Box bgcolor='gray' flex={4} p={2}> 
    <Typography variant='h5' component="p">This is {props.word} : Feeds</Typography>
    
    </Box>
  )
}

export default Feeds
