import { Button } from '@mui/material'
import { SearchNormal1 } from 'iconsax-react'
import React, { FC } from 'react'

interface Props {}

const SearchButton: FC<Props> = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        width: '55px',
        background: 'primary.main',
        color: 'white',
        borderRadius: 2,
        '&:hover': {
          backgroundColor: 'primary.dark',
        },
      }}
    >
      <SearchNormal1 size="24" color="#fff" />
    </Button>
  )
}

export default SearchButton
