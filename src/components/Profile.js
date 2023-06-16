import React from 'react'
import { Box } from '@mui/material'
import profilePhoto from '../assets/profilePhoto.jpg'
import '../profile.css'

const Profile = () => {
  return (
    <Box >
        <img src={profilePhoto} style={{ height:'350px', width: '350px'}} />
        
    </Box>
  )
}

export default Profile