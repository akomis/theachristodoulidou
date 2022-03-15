import Fonts from "../components/fonts";
import SEO from "../components/seo";
import Intro from "../sections/intro";

export default function Home() {
	return (
		<div className="screen">
			<SEO />
			<Fonts />
			<Intro />
		</div>
	);
}
