import { Box, Stack } from '@mui/material'
import logo from 'public/images/diginext.png'
import ContainedButton from 'shared/component/ContainedButton'
import SearchBox from 'shared/component/SearchBox'

const Navbar = () => {
  return (
    <Box
      sx={{
        px: 10,
        py: 2,
        background: '#FFFFFF',
        boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.12)',
        borderRadius: '0px 0px 40px 40px',
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <img src={logo.src} />
        <SearchBox />
        <ContainedButton text={'Browse All Categories'} />
      </Stack>
    </Box>
  )
}

export default Navbar
