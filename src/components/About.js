import React from 'react'
import {Stack, Typography} from '@mui/material'
import Grid from "@mui/material/Grid"


const About = () => {

  return (
    <Grid margin= 'auto' width='50%' sx={{ padding:"20px", mt:'30px', width:'750px' }}>
      <Typography sx={{ }} fontSize='1.2rem' fontWeight='600' color='teal'>
        ABOUT ME
      </Typography>
      <Typography  sx={{ fontSize:'1.5rem', fontWeight:400 }}>
        I am a dedicated Web Developer with a Deep passion for learning new things.
      </Typography>
      <Typography sx={{ textAlign:"justify", mt:'16px' }}>
        As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
      </Typography>
    </Grid>
  )
}

export default About