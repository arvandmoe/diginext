import { Button } from '@mui/material'
import React, { FC } from 'react'

interface Props {
  text: string
}

const ContainedButton: FC<Props> = (props) => {
  const { text } = props
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: 2,
        py: 1,
        '&:hover': {
          backgroundColor: 'primary.dark',
        },
      }}
    >
      {text}
    </Button>
  )
}

export default ContainedButton