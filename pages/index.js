import Intro from "../sections/intro";
import XartinoKouti from "../sections/xartinokouti";

export default function Home() {
	return (
		<div className="h-screen w-screen overflow-x-hidden">
			<Intro />
			<XartinoKouti />
		</div>
	);
}
