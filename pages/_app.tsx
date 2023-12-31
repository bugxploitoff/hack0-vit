import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </NextUIProvider>
  );
}
