import { Button } from '@mui/material'
import React, { FC, ReactNode } from 'react'

interface Props {
  text: string
  icon: ReactNode
}

const ContainedButton: FC<Props> = (props) => {
  const { text, icon } = props
  return (
    <Button
      variant='contained'
      sx={{
        borderRadius: 2,
        gap: 1,
        py: 1,
        '&:hover': {
          backgroundColor: 'primary.dark',
        },
      }}
    >
      {icon}
      {text}
    </Button>
  )
}

export default ContainedButton
