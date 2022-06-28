import React from 'react'
import logo from 'public/images/diginext.png'
import { Container, Stack } from '@mui/material'

const Navbar = () => {
  return (
    <Container>
      <Stack direction="row">
        <img src={logo.src} />
        <div>Navbar</div>
      </Stack>
    </Container>
  )
}

export default Navbar
