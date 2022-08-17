import '../styles/globals.css'
import type { AppProps, AppContext } from 'next/app'
import {cache,css} from '@emotion/css'
import {CacheProvider, Global} from '@emotion/react'
import {GlobalStyles} from 'twin.macro'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <GlobalStyles/>
      <Global
      styles={css`
      #wave-canvas{
        width: 400px;
        height: 400px;
      }
      `}
      />
      <Component {...pageProps}/>
    </CacheProvider>
  )
}

export default MyApp
