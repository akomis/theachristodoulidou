import Image from "next/image";
import { useEffect, useState, useRef } from "react";

type imgProps = {
	src: string;
	alt: string;
	width: number;
	height: number;
	imgPosition: string;
	textPosition: string;
	delay: number;
};

const TITLE = "Το χάρτινο κουτί";
const BG_TEXT = [
	"Μια καθηλωτική αφήγηση με κεντρική ηρωίδα την Φαίδρα η οποία πλαισιώνεται από τα πρόσωπα που θα καθορίσουν την πορεία και τη μοίρα της.",
	"Μια γυναίκα που κάθε φορά που επιχειρούσε μια απονενοημένη έξοδο, έπεφτε σε χειρότερη δύνη",
	"Μια τόσο αληθινή ηρωίδα, που ο αναγνώστης παίρνοντας το βιβλίο στα χέρια του, δύσκολα μπορεί να αποχωριστεί",
	"Γίνεται μέρος της ιστορίας, μοιράζεται τα πάθη και τις αγωνίες των ηρώων, ταυτίζεται, παίρνει θέση και διαμορφώνει στάση",
	"Μια ιστορία που ψηλαφεί τις πιο σκοτεινές περιοχές της ανθρώπινης φύσης και που τελικά μας οδηγεί στην απόλυτη κάθαρση...",
	"Ένα μυθιστόρημα που αξίζει να διαβαστεί και να ταξιδέψει σε πολλά χέρια",
];
const DEFAULT_ALT = "To Xartino Kouti Book Cover - Το Χάρτινο Κουτί Εξώφυλλο";
const IMAGE_PROPS = [
	{
		src: "/images/intro/doll.png",
		alt: DEFAULT_ALT,
		width: 446,
		height: 179,
		imgPosition:
			"-rotate-[20deg] -left-10 top-20 w-[200px] sm:w-[250px] lg:w-[300px]",
		textPosition:
			"top-10 left-[180px] w-[50%] sm:left-[225px] sm:top-10 sm:w-[500px] md:w-[350px] md:text-xl lg:left-[300px] lg:w-[45%]",
		delay: 300,
	},
	{
		src: "/images/intro/tree.png",
		alt: DEFAULT_ALT,
		width: 1424,
		height: 721,
		imgPosition:
			"-right-10 top-[200px] w-[400px] sm:w-[500px] sm:top-[130px] md:w-[600px] md:top-[80px] lg:w-[800px]",
		textPosition:
			"text-right top-[360px] right-26 w-[70%] sm:right-10 sm:top-12 sm:w-[70%] md:right-10 md:top-[40%] md:w-[450px] lg:top-[500px] lg:right-[5%] lg:w-[40%]",
		delay: 800,
	},
	{
		src: "/images/intro/girl.png",
		alt: DEFAULT_ALT,
		width: 1078,
		height: 1135,
		imgPosition:
			"right-[20%] bottom-0 w-[500px] sm:-left-10 sm:w-[650px] lg:left-10 lg:w-[700px]",
		textPosition:
			"text-left right-2 w-[120px] bottom-[420px] sm:text-xl sm:text-right sm:w-[300px] sm:left-[50px] sm:bottom-[520px] lg:w-[400px] lg:left-[800px] lg:bottom-[350px] lg:text-left ",
		delay: 1000,
	},
];

const Heading = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div
			className={`absolute left-0 right-0 mx-auto transition-opacity duration-1000 delay-[1200ms] top-[450px] sm:top-[300px] ${
				!mounted ? "opacity-0" : "opacity-100"
			} w-[350px] sm:w-[600px] md:w-[900px] lg:w-[1000px] flex-col`}
		>
			<h1
				className={`${
					!mounted ? "text-white" : "text-[#A24F70]"
				} m-4 text-center text-5xl sm:text-7xl transition-colors duration-1000 delay-[2000ms] sm:w-auto font-vollkorn md:text-8xl`}
			>
				{TITLE}
			</h1>
		</div>
	);
};

type InteractiveImageProps = {
	imgProps: imgProps;
	textIndex: number;
	active: boolean;
};

const InteractiveImage = (props: InteractiveImageProps) => {
	const { imgProps, textIndex, active } = props;
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div
			className={`transition-opacity duration-1000 delay-500 ${
				!mounted ? "opacity-0" : "opacity-100"
			}`}
		>
			<div
				className={`absolute transition-all duration-700 ${
					imgProps.imgPosition
				} ${!active ? "grayscale" : "grayscale-0"}`}
			>
				<Image
					src={imgProps.src}
					alt={imgProps.alt}
					width={imgProps.width}
					height={imgProps.height}
					layout={"responsive"}
				/>
			</div>
			<div
				className={`absolute transition-opacity duration-500 sm:text-xl md:text-2xl lg:text-3xl ${
					imgProps.textPosition
				} 
		${!active ? "opacity-0" : "opacity-100"}`}
			>
				<p className="italic font-vollkorn font-light text-gray-300">
					{`"${BG_TEXT[textIndex]}"`}
				</p>
			</div>
		</div>
	);
};

const ORDER_DETAILS = "Τηλέφωνο παραγγελιών βιβλίου ";
const [TEL_CODE, TEL_NUMBER] = ["+357", "96754716"];

const OrderBlock = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className="absolute bottom-0 w-full text-right h-[120px] pr-5 md:pr-[5%] lg:pr-[10%] flex flex-col justify-center items-end text-xl md:text-2xl bg-stone-900">
			<div
				className={`transition-opacity duration-1000 delay-[2200ms]
				${!mounted ? "opacity-0" : "opacity-100"}`}
			>
				<p className="font-sans w-[200px] sm:w-[300px] md:w-[500px] text-gray-300">
					{ORDER_DETAILS}
				</p>
				<a
					href={`tel:${TEL_CODE}${TEL_NUMBER}`}
					className="font-bold text-gray-300 hover:text-white hover:text-2xl md:hover:text-3xl lg:hover:text-4xl duration-300"
				>
					{TEL_NUMBER}
				</a>
			</div>
		</div>
	);
};

export default function Intro() {
	const [textIndex, setTextIndex] = useState(-1);
	const [pause, setPause] = useState(true);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		if (!mounted) {
			setMounted(true);
			setTimeout(() => setTextIndex(0), 3000);
		}

		// const words = BG_TEXT[textIndex].split(" ").length;
		// const timeout = Math.max((words * 60000) / 200, 5000);

		setTimeout(() => {
			setPause(true);
			setTimeout(() => {
				textIndex < BG_TEXT.length - 1
					? setTextIndex(textIndex + 1)
					: setTextIndex(0);
				setPause(false);
			}, 500);
		}, 5500);
	}, [textIndex, mounted]);

	return (
		<div className="relative h-full min-h-[1125px] bg-black">
			<OrderBlock />
			{IMAGE_PROPS.map((imgProps, i) => (
				<InteractiveImage
					key={i}
					imgProps={imgProps}
					textIndex={textIndex}
					// active={i === 1}
					active={(i === textIndex || i + 3 === textIndex) && !pause}
				/>
			))}
			<Heading />
		</div>
	);
}
