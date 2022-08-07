import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface Props {
  src: string
}

const CircleImage = (props: Props) => {
  const { src } = props
  return (
    <Box sx={{ width: '48px', height: '48px' , position: 'relative', borderRadius: '50%', overflow: 'hidden'}}>
      <Image layout='fill' src={src} alt='Picture of the author' />
    </Box>
  )
}

export default CircleImage
