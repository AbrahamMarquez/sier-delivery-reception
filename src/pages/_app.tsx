import '@/styles/globals.css'
// import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

import { PrimeReactProvider } from 'primereact/api'
// import '@/styles/icons.scss'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import { AuthProvider } from '@/context/AuthProvider'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
})
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: false,
//       gcTime: 0
//     }
//   }
// })

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App ({ Component, pageProps }: AppPropsWithLayout): ReactNode {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <>
    {/* // <AuthProvider>
    //   <QueryClientProvider client={queryClient}> */}
        <PrimeReactProvider>
          {
            getLayout(
              <main className={roboto.className}>
                <Component {...pageProps} />
              </main>
            )
          }
        </PrimeReactProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    {/* //   </QueryClientProvider> */}
    {/* // </AuthProvider> */}
    </>
  )
}
