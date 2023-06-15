import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'


const NavLinks = () => {
  return (
    <Stack 
    direction= 'row'
    gap='40px'
    fontSize='18px'
    alignItems='center'
    sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}
    >
      <Link to='/'
      style={{
          borderBottom: '3px solid #04AA6D',
          color: '#3A1212' 

        }}
      >
          Home
      </Link>

      <Link >
        <a href="#About"
          style={{

            color: '#3A1212'
          }}
        >
          About
        </a>
      </Link>
      <Link >
        <a href="#Projects"
          style={{

            color: '#3A1212'
          }}
        >
          Projects
        </a>
      </Link>
      <Link >
        <a href="#Contact"
          style={{

            color: '#3A1212'
          }}
        >
          Contact
        </a>
      </Link>
      
  </Stack>
  )
}

export default NavLinks

