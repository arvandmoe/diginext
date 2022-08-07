import { Box, Stack } from '@mui/material'
import { Category, Heart, ShoppingCart } from 'iconsax-react'
import logo from 'public/images/diginext.png'
import ContainedButton from 'shared/component/button/ContainedButton'
import AcountAvatar from 'shared/component/nav/AcountAvatar'
import SearchBox from 'shared/component/nav/SearchBox'
import BadgeWithCount from 'shared/component/other/BadgeWithCount'

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
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <img src={logo.src} />
        <SearchBox />
        <Stack direction='row' gap={4} sx={{ whiteSpace: 'nowrap' }}>
          <BadgeWithCount text='Wishlist' icon={<Heart size='28' />} />
          <BadgeWithCount
            text='My cart'
            icon={<ShoppingCart size='28' />}
            desc='$21'
          />
          <AcountAvatar />
          <ContainedButton
            text={'Browse All Categories'}
            icon={<Category size='16' color='#fff' />}
          />
        </Stack>
      </Stack>
    </Box>
  )
}

export default Navbar
