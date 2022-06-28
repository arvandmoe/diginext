import { ThemeProvider } from '@mui/system'
import { FC } from 'react'
import theme from './theme'

interface Props {
    children?: React.ReactNode;
}

const Material: FC<Props> = (props) => {
  return (
    <>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </>
  )
}

export default Material
