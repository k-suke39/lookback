import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import '@/styles/destyle.css';
import Header from '@/components/Header';

import createEmotionCache from '@/styles/createEmotionCache';
import theme from '@/styles/theme';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps): JSX.Element {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
}
