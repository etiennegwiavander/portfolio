import React from 'react'
import { Box } from '@mui/material'
import Homepage from '../components/Homepage'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <Box>
        <Homepage/>
        <About/>
        <Projects/>
        <Contact/>
        
    </Box>
  )
}

export default Home