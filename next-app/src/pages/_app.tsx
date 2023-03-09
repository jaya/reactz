import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { darkTheme } from '../styles/themes/dark'

export default function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps}></Component>
    </ThemeProvider>
  )
}
