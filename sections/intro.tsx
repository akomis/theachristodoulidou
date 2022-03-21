import Image from "next/image";
import { useState } from "react";

type imgProps = {
	src: string;
	alt: string;
	width: number;
	height: number;
	imgPosition: string;
	text: string;
	textPosition: string;
};

const TITLE = "Το χάρτινο κουτί";
const DESCRIPTION = "Κυκλοφορεί αρχές Απριλίου";
const DEFAULT_ALT = "To Xartino Kouti Book Cover - Το χάρτινο κουτί εξώφυλλο";
const IMAGE_PROPS = [
	{
		src: "/images/intro/doll.png",
		alt: DEFAULT_ALT,
		width: 446,
		height: 179,
		imgPosition:
			"-rotate-[20deg] -left-10 top-20 w-[200px] sm:w-[250px] lg:w-[300px]",
		text: "Σηκώθηκε όρθιος, τράβηξε το παντελόνι του να το κουμπώσει και προτού φύγει έσκυψε ξανά πάνω από το κορμί της, που αφημένο όπως ήταν έμοιαζε με άψυχο σώμα πάνινης κούκλας",
		textPosition:
			"top-5 left-[180px] w-[250px] sm:left-[220px] sm:w-[500px] md:w-[350px] md:text-xl lg:left-[300px] lg:w-[45%]",
	},
	{
		src: "/images/intro/tree.png",
		alt: DEFAULT_ALT,
		width: 1424,
		height: 721,
		imgPosition:
			"-right-10 top-[220px] w-[400px] sm:w-[500px] sm:top-[130px] md:w-[600px] md:top-[80px] lg:w-[800px]",
		text: "Ετούτα είναι μαλακά σαν το βαμβάκι. Στεναχωριέσαι που θα κοιμάμαι στη σκιά ενός τόσο όμορφου δέντρου;",
		textPosition:
			"text-right top-24 right-10 w-[40%] sm:top-16 sm:w-[60%] md:top-[40%] md:w-[450px] lg:top-[500px] lg:right-[5%] lg:w-[40%]",
	},
	{
		src: "/images/intro/girl.png",
		alt: DEFAULT_ALT,
		width: 1078,
		height: 1139,
		imgPosition:
			"-left-40 -bottom-32 w-[500px] sm:-left-10 sm:w-[650px] lg:left-10 lg:w-[700px]",
		text: "Το κορίτσι υπάκουα απομακρύνθηκε και προτού πάει στην κάμαρή της πέρασε από αυτή του Δάκη για να δει αν χρειαζόταν κάτι.",
		textPosition:
			"text-justify left-[100px] w-[250px] bottom-[420px] sm:text-right sm:w-[300px] sm:bottom-[400px] sm:left-[50px] lg:w-[400px]",
	},
];

const TextContent = () => (
	<div className="flex absolute top-[20%] left-[10%]">
		<div className="w-[350px] sm:w-[600px] md:w-[900px] lg:w-[1000px] flex-col">
			<h1 className="w-0 sm:w-auto font-vollkorn text-7xl md:text-8xl text-white m-4 text-left">
				{TITLE}
			</h1>
			<div className="text-right">
				<h5 className="my-4 font-notoserif text-xl sm:text-2xl md:text-4xl text-gray-200">
					{DESCRIPTION}
				</h5>
			</div>
		</div>
	</div>
);

type InteractiveImageProps = {
	imgProps: imgProps;
};

const InteractiveImage = (props: InteractiveImageProps) => {
	const { imgProps } = props;
	const [hovered, setHovered] = useState(false);
	const [mounted, setMounted] = useState(false);

	return (
		<div
			className=""
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div
				className={`absolute duration-500 ${imgProps.imgPosition} 
				${mounted ? "grayscale-0" : "grayscale"}
				${hovered ? "grayscale-0" : "grayscale"}`}
			>
				<Image
					src={imgProps.src}
					alt={imgProps.alt}
					width={imgProps.width}
					height={imgProps.height}
				/>
			</div>
			<div
				className={`absolute duration-500 sm:text-xl md:text-2xl lg:text-3xl ${
					imgProps.textPosition
				} 
		${hovered ? "opacity-100" : "opacity-0"}`}
			>
				<p className="italic font-vollkorn font-light text-gray-300">
					{`"${imgProps.text}"`}
				</p>
			</div>
		</div>
	);
};

export default function Intro() {
	return (
		<div className="relative min-h-[1000px] h-screen bg-black">
			{IMAGE_PROPS.map((imgProps) => (
				<InteractiveImage key={imgProps.src} imgProps={imgProps} />
			))}
			<TextContent />
		</div>
	);
}
