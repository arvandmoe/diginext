import { Theme } from '@mui/system'
import { createTheme } from '@mui/material/styles'

const { palette } = createTheme()
const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#0064D2',
      '200': '#90caf9',
      '500': '#2196f3',
      '700': '#1976d2',
      'dark': '#093170'
    },
    secondary: {
      main: '#9FBB1A',
      '200': '#D6EA77',
      '500': '#9FBB1A',
      '700': '#556410',
    },
    error: {
      dark: '#C30000',
      main: '#ED2E2E',
    },
    success: {
      dark: '#00966D',
      main: '#00BA88',
      light: '#F3FDFA',
    },
    warning: {
      dark: '#A9791C',
      main: '#F4B740',
      light: '#FFF8E1',
    },
    black: palette.augmentColor({
      color: {
        main: '#0C0C0C',
        dark: '#0C0C0C',
      },
    }),
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#0C0C0C',
    },
  },
  typography: {
    allVariants: {
      fontFamily: ['Poppins'].join(','),
    },
    button: {
      textTransform: 'none'
    },
    display1: {
      fontWeight: 'bold',
      fontSize: '64px',
      lineHeight: '140%',
    },
    display2: {
      fontWeight: 'bold',
      fontSize: '56px',
      lineHeight: '120%',
    },
    h1: {
      fontWeight: 'bold',
      fontSize: '44px',
      lineHeight: '140%',
    },
    h2: {
      fontWeight: 'bold',
      fontSize: '40px',
      lineHeight: '140%',
    },
    h3: {
      fontWeight: 'bold',
      fontSize: '32px',
      lineHeight: '140%',
    },
    h4: {
      fontWeight: 'bold',
      fontSize: '24px',
      lineHeight: '140%',
    },
    h6: {
      fontWeight: 'bold',
      fontSize: '16px',
      lineHeight: '140%',
    },
    bodyxl: {
      fontFamily: 'Poppins',
      fontSize: '20px',
      lineHeight: '180%',
    },
    bodylg: {
      fontFamily: 'Poppins',
      fontSize: '18px',
      lineHeight: '180%',
    },
    bodymd: {
      fontFamily: 'Poppins',
      fontSize: '16px',
      lineHeight: '180%',
    },
    bodysm: {
      fontFamily: 'Poppins',
      fontSize: '14px',
      lineHeight: '180%',
    },
    bodyxs: {
      fontFamily: 'Poppins',
      fontWeight: '300',
      fontSize: '12px',
      lineHeight: '180%',
      textTransform: 'capitalize',
    },
    bottonsm: {
      fontFamily: 'Poppins',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '24px',
    },
    captionsm: {
      fontWeight: '600',
      fontSize: '11px',
      lineHeight: '180%',
    },
    captionmd: {
      fontFamily: 'Poppins',
      fontWeight: '600',
      fontSize: '12px',
      lineHeight: '180%',
    },
    captionlg: {
      fontFamily: 'Poppins',
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '180%',
    },
    overlinesm: {
      fontWeight: '600',
      fontSize: '12px',
      lineHeight: '170%',
      letterSpacing: '0.8px',
      textTransform: 'uppercase',
    },
    overlinelg: {
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '170%',
      letterSpacing: '0.8px',
      textTransform: 'uppercase',
    },
    small: {
      fontFamily: 'Poppins',
      fontSize: '10px',
      lineHeight: '180%',
    },
  },
})

export default theme
