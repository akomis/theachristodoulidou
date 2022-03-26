import Intro from "../sections/intro";
import XartinoKouti from "../sections/xartinokouti";
import Koukla from "../sections/koukla";

export default function Home() {
	return (
		<div className="h-screen w-screen overflow-x-hidden">
			<Intro />
			<XartinoKouti />
			<Koukla />
		</div>
	);
}
