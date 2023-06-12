import theme from '../theme';

import { Footer, Navbar } from '@/components';
import '@/styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Enline | Institutional</title>
			</Head>
			<ChakraProvider theme={theme}>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</ChakraProvider>
		</>
	);
}
