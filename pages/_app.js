import Head from "next/head";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Thea Christodoulidou - To Xartino Kouti</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta name="description" content="Thea Christodoulidou" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
