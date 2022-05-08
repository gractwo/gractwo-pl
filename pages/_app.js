import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/gractwo.svg" />
				<title>Gractwo</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Lexend:wght@600&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
