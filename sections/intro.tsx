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
			"top-10 left-[180px] w-[300px] sm:left-[220px] sm:w-[500px] lg:left-[300px] lg:w-[50%]",
	},
	{
		src: "/images/intro/tree.png",
		alt: DEFAULT_ALT,
		width: 1424,
		height: 721,
		imgPosition:
			"-right-10 top-[20%] w-[70%] sm:top-[15%] md:w-[60%] md:top-[5%] lg:w-[50%]",
		text: "Ετούτα είναι μαλακά σαν το βαμβάκι. Στεναχωριέσαι που θα κοιμάμαι στη σκιά ενός τόσο όμορφου δέντρου;",
		textPosition:
			"text-right top-12 right-10 w-[40%] sm:top-16 sm:w-[40%] md:top-[40%] lg:top-[60%] lg:right-[5%] lg:w-[40%]",
	},
	{
		src: "/images/intro/girl.png",
		alt: DEFAULT_ALT,
		width: 1078,
		height: 1139,
		imgPosition:
			"-left-20 -bottom-32 w-[500px] sm:-left-10 sm:w-[650px] lg:left-0 lg:w-[700px]",
		text: "Το κορίτσι υπάκουα απομακρύνθηκε και προτού πάει στην κάμαρή της πέρασε από αυτή του Δάκη για να δει αν χρειαζόταν κάτι. ",
		textPosition:
			"text-right left-10 w-[250px] bottom-[300px] sm:w-[300px] sm:bottom-[400px] sm:left-[50px] md:left-[650px] md:w-[400px] md:text-left lg:left-[700px] lg:w-[40%]",
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

const addToFilename = (path: string, addition: string): string => {
	const [filename, extension] = path.split(".");
	return `${filename}${addition}.${extension}`;
};

const InteractiveImage = (props: InteractiveImageProps) => {
	const { imgProps } = props;
	const [hovered, setHovered] = useState(false);

	const imgUtilityClasses = `absolute duration-300 ${imgProps.imgPosition}`;
	const textUtilityClasses = `absolute duration-300 ${
		imgProps.textPosition
	} ${hovered ? "opacity-100" : "opacity-0"}`;
	return (
		<div
			className=""
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className={`${imgUtilityClasses}`}>
				<Image
					src={imgProps.src}
					alt={imgProps.alt}
					width={imgProps.width}
					height={imgProps.height}
				/>
			</div>
			<div
				className={`${
					hovered ? "opacity-0" : "opacity-100"
				} ${imgUtilityClasses}`}
			>
				<Image
					src={addToFilename(imgProps.src, "_bw")}
					alt={imgProps.alt}
					width={imgProps.width}
					height={imgProps.height}
				/>
			</div>
			<div className={textUtilityClasses}>
				<p className="italic font-vollkorn font-light text-gray-300 sm:text-xl md:text-2xl lg:text-3xl ">
					{`"${imgProps.text}"`}
				</p>
			</div>
		</div>
	);
};

export default function Intro() {
	return (
		<div className="relative h-screen bg-black">
			{IMAGE_PROPS.map((imgProps) => (
				<InteractiveImage key={imgProps.src} imgProps={imgProps} />
			))}
			<TextContent />
		</div>
	);
}
