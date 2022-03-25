import Intro from "../sections/intro";
import SectionB from "../sections/sectionb";

export default function Home() {
	return (
		<div className="h-screen w-screen overflow-x-hidden">
			<Intro />
			<SectionB />
		</div>
	);
}
