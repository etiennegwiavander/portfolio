import React from 'react'
import { Stack, Box, Typography, Button, Grid } from '@mui/material'
import Profile from './Profile'
import '../stack.css'




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
    <Box  sx={{  width: '100vw', height: "100vh", mt: "-60px",backgroundColor: {
xs: "red",
md: "green",
lg: "blue",
xl: "pink"
}, }}>
  

        <Stack container direction='row' sx={{ direction: { xs: "column", lg: "row" } , mt:'340px', mb:'70px'}} width="100%">

            <Box sx={{ width:{ md: '50vw' }}}>
                <Stack sx={{  textAlign: 'center', mt:{ xs:'100px', md:'140px', lg:'120px', xl:"130px", }, ml:{ md:'40px', lg:'80px'}, padding:'15px', width:{xl:'700px'}}}>
                    <Typography variant='h2' sx={{ variant: 'h3', ml:{ xl:'250px', lg:'200px'} }}>
                        Front-End React Developer 👋🏽
                    </Typography>
                    <Typography  mt='20px' sx={{ mt: '50px', textAlign:'justify', pl:{xl:'30px'}, ml:{xl:'150px', lg:'100px'}, width:{xl:'680px', lg:'600px'}, fontSize:'23px' }}>
                    
                        Hi, I'm Etienne Gwiavender Lakiebukeh. A passionate Front-end React Developer based in Bamenda, Cameroon. <span fontSize='2em' >🦍</span> 

                    </Typography>
                </Stack>    
            </Box>

            <Box sx={{ width:{ md: '50vw', padding: "15px" }}}>
                <Profile/>
            </Box>
        </Stack>
        <Stack direction='row' mx={10}  sx={{ flexWrap: 'wrap', gap: '20px', mt: "30px"}}>
            {techStacks.map( (techStack) =>(
               
                <Box className='categoryWrapper' sx={{ borderRadius:'50%'}} >
                    <Stack key={techStack.name} >
                        <img 
                            src={techStack.icon} 
                            alt={techStack.name}
                            style={{
                                width: '50px',
                                height: '50px'
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