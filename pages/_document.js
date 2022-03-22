import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				{/* <link rel="icon" href="/favicon.ico" /> */}
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
					crossOrigin=""
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display&family=Open+Sans&family=Vollkorn:ital,wght@1,400;1,500&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
