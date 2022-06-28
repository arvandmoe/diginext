import React from 'react'
import { PaletteColor } from '@mui/material'

// Extending typography variants to match design typography Text Styles
declare module '@mui/material/styles' {
  interface TypographyVariants {
    display1: React.CSSProperties
    display2: React.CSSProperties
    bodyxl: React.CSSProperties
    bodylg: React.CSSProperties
    bodymd: React.CSSProperties
    bodysm: React.CSSProperties
    bodyxs: React.CSSProperties
    bottonsm: React.CSSProperties
    captionsm: React.CSSProperties
    captionmd: React.CSSProperties
    captionlg: React.CSSProperties
    overlinesm: React.CSSProperties
    overlinelg: React.CSSProperties
    small: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    display1: React.CSSProperties
    display2: React.CSSProperties
    bodyxl: React.CSSProperties
    bodylg: React.CSSProperties
    bodymd: React.CSSProperties
    bodysm: React.CSSProperties
    bodyxs: React.CSSProperties
    bottonsm: React.CSSProperties
    captionsm: React.CSSProperties
    captionmd: React.CSSProperties
    captionlg: React.CSSProperties
    overlinesm: React.CSSProperties
    overlinelg: React.CSSProperties
    small: React.CSSProperties
  }
}
// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display1: true
    display2: true
    bodyxl: true
    bodylg: true
    bodymd: true
    bodysm: true
    bodyxs: true
    bottonsm: true
    captionsm: true
    captionmd: true
    captionlg: true
    overlinesm: true
    overlinelg: true
    small: true
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    black: PaletteColor
  }
  interface PaletteOptions {
    black: PaletteColor
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    black: true
  }
}
