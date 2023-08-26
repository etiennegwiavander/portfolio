import React from 'react'
import { Stack, Box, Typography, Button } from '@mui/material'
import Profile from './Profile'
import '../stack.css'
// import techStacks from '../utils/stackIcons'


import html from '../assets/stackIcons/html5.png'
import css from '../assets/stackIcons/css.png'
import javascript from '../assets/stackIcons/javascript.png'
import react from '../assets/stackIcons/react.png'
import materialUi from '../assets/stackIcons/material-ui.png'
import node from '../assets/stackIcons/nodejs.png'
import mongodb from '../assets/stackIcons/mongodb.png'
import linux from '../assets/stackIcons/linux.png'
import git from '../assets/stackIcons/git.png'
import apacheNifi from '../assets/stackIcons/apache-nifi.png'


export const techStacks = [
    { name: 'HTML5', icon: html },
    { name: 'CSS', icon: css},
    { name: 'JavaScrip', icon: javascript},
    { name: 'React', icon: react},
    { name: 'Git', icon: git},
    { name: 'Material-Ui', icon: materialUi},
    { name: 'Node', icon: node},
    { name: 'MongoDb', icon: mongodb},
    { name: 'Linux', icon: linux},
    { name: 'Apache Nifi', icon: apacheNifi},
    
]

const Homepage = () => {

  return (
    <Box  sx={{  width: '100vw', height: "100vh", mt: "-60px"}}>
        <Stack direction='row' width="100%" sx={{mt: '180px'}}>
            <Box sx={{ width:{ md: '50vw' }, backgroundColor: 'teal'}}>
                <Stack sx={{  textAlign: 'center', mt:"60px", padding:'15px'}}>
                    <Typography variant='h2' sx={{ variant:{xs: 'h4', md: 'h3'}, ml:{xxl: '150px', xl: '250px'} }}>
                        Front-End React Developer 👋🏽
                    </Typography>
                    <Typography  mt='20px' sx={{ mt: '50px', textAlign: 'center' }}>
                    
                        Hi, I'm Etiene Gwiavender Lakiebukeh. A passionate Front-end React Developer based in Bamenda, Cameroon. 📍

                    </Typography>
                </Stack>    
            </Box>
            <Box sx={{ width:{ md: '50vw', padding: "15px" }, backgroundColor: 'pink'}}>
                <Profile/>
            </Box>
        </Stack>
        <Stack direction='row' mx={10} sx={{ flexWrap: 'wrap', gap: '20px', mt: "30px"}}>
            {techStacks.map( (techStack) =>(
               
                <Box className='categoryWrapper'  >
                    <Stack key={techStack.name} >
                        <img 
                            src={techStack.icon} 
                            alt={techStack.name}
                            style={{
                                width: '40px',
                                height: '40px'
                            }}
                        />
                    </Stack>
                    <Button>
                        <span>
                            <span>
                                <span >
                                    {techStack.name}
                                </span>
                            </span>
                        </span>
                    </Button> 
                </Box>  
            ))}
        </Stack>
               
    </Box>
  )
}

export default Homepage