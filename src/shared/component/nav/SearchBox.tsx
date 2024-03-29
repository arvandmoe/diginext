import { Divider, Stack, TextField, Typography } from '@mui/material'
import { ArrowDown2 } from 'iconsax-react'
import SearchButton from '../button/SearchButton'

const SearchBox = () => {
  return (
    <Stack
      direction='row'
      width='100%'
      justifyContent='space-between'
      sx={{
        backgroundColor: '#F3F3F3',
        borderRadius: 1,
        mx: 4,
      }}
    >
      <Stack direction='row' alignItems='center' sx={{ py: 1, px: 2 }}>
        <Typography variant='bodymd' sx={{ px: 1 }}>
          All Categories
        </Typography>
        <ArrowDown2 size='16' color='#000' />
        <Divider orientation='vertical' sx={{ px: 1, py: 2 }} />
        <TextField
          id='filled-basic'
          placeholder='Search for items...'
          variant='filled'
          InputProps={{
            disableUnderline: true,
            style: {
              paddingTop: '0px',
              backgroundColor: '#F3F3F3',
            },
          }}
          sx={{
            textDecoration: 'none',
            '& .MuiFilledInput-input': {
              padding: 1,
            },
          }}
        />
      </Stack>
      <SearchButton />
    </Stack>
  )
}

export default SearchBox
