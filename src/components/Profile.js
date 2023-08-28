import React from 'react'
import { Box } from '@mui/material'
import profilePhoto from '../assets/profilePhoto.jpg'
import '../profile.css'

const Profile = () => {
  return (
    <Box sx={{ mt: '100px', textAlign: 'center', ml:{md:'80px', xl:'150px'}, mr:'150px'}}>
        <img src={profilePhoto} style={{ height:'250px', width: '250px'}} className='profile-img'/>
        
    </Box>
  )
}

export default Profile