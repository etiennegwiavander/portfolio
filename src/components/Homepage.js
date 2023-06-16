import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import Profile from './Profile'

const Homepage = () => {
  return (
    <Box mt= '65px'>
        <Stack direction='row' sx={{width: '100%', height: '90vh'}}>
            <Box sx={{ width: '700px', backgroundColor: 'teal'}}>
                <Typography variant='h2' textAlign='center'>
                Front-End React Developer 👋🏽
                </Typography>
                <Typography textAlign='center' mt='20px'>
                
                Hi, I'm Etiene Gwiavender Lakiebukeh. A passionate Front-end React Developer based in Bamenda, Cameroon. 📍

                </Typography>
            </Box>
            <Box sx={{ width: '700px', backgroundColor: 'pink'}}>
                <Profile/>
            </Box>
        </Stack>

    </Box>
  )
}

export default Homepage