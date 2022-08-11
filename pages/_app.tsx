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
        width: 700px;
        height: 700px;
      }
      `}
      />
      <Component {...pageProps}/>
    </CacheProvider>
  )
}

export default MyApp
