import Fonts from "../components/fonts";
import SEO from "../components/seo";
import Intro from "../sections/intro";
import Order from "../sections/order";

export default function Home() {
	return (
		<div className="screen">
			<SEO />
			<Fonts />
			<Intro />
			<Order />
		</div>
	);
}
