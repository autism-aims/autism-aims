import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
	return (
		<>
		{/* navbar */}
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
