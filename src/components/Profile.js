import React from 'react'
import { Box } from '@mui/material'
import profilePhoto from '../assets/profilePhoto.jpg'
import '../profile.css'

const Profile = () => {
  return (
    <Box sx={{ mt: '50px', textAlign: 'center'}}>
        <img src={profilePhoto} style={{ height:'350px', width: '350px'}} className='profile-img'/>
        
    </Box>
  )
}

export default Profile