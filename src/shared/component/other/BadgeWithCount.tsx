import { Badge, Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface Props {
  text: string
  icon: ReactNode
  desc?: string
}

const BadgeWithCount = (props: Props) => {
  const { text, icon, desc } = props
  return (
    <Stack direction='row' gap={2} alignItems='center'>
      <Badge color='primary' badgeContent={2}>
        {icon}
      </Badge>
      <Stack>
        <Typography variant='bodymd'>{text}</Typography>
        {desc && (
          <Typography variant='bodysm' color='primary'>
            {desc}
          </Typography>
        )}
      </Stack>
    </Stack>
  )
}

export default BadgeWithCount
