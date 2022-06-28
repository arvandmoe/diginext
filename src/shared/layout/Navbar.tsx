import React from 'react'
import logo from 'public/images/diginext.png'
import { Container, Stack } from '@mui/material'
import ContainedButton from 'shared/component/ContainedButton'

const Navbar = () => {
  return (
    <Container sx={{ padding: 2 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <img src={logo.src} />
        <div>Navbar</div>
        <ContainedButton text={'Browse All Categories'} />
      </Stack>
    </Container>
  )
}

export default Navbar
