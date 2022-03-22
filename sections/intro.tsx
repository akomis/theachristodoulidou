import Image from "next/image";
import { useEffect, useState } from "react";

type imgProps = {
	src: string;
	alt: string;
	width: number;
	height: number;
	imgPosition: string;
	text: string[];
	textPosition: string;
	delay: number;
};

const TITLE = "Το χάρτινο κουτί";
const DESCRIPTION = "Κυκλοφορεί αρχές Απριλίου";
const DEFAULT_ALT = "To Xartino Kouti Book Cover - Το Χάρτινο Κουτί Εξώφυλλο";
const TEXT_LEN = 3;
const IMAGE_PROPS = [
	{
		src: "/images/intro/doll.png",
		alt: DEFAULT_ALT,
		width: 446,
		height: 179,
		imgPosition:
			"-rotate-[20deg] -left-10 top-20 w-[200px] sm:w-[250px] lg:w-[300px]",
		text: [
			"Σηκώθηκε όρθιος, τράβηξε το παντελόνι του να το κουμπώσει και προτού φύγει έσκυψε ξανά πάνω από το κορμί της, που αφημένο όπως ήταν έμοιαζε με άψυχο σώμα πάνινης κούκλας",
			"Φωτεινή είχαν ονομάσει μια κούκλα που της είχε αγοράσει η Αστέρω, η οποία αφού δεν μπόρεσε να δώσει αυτό το όνομα στην Άννα όπως ήθελε, την έπεισε να ονομάσουνε έτσι την κούκλα που της είχε πάρει δώρο",
			"Η κούκλα πεσμένη στο πλάι της την κοιτούσε κατάματα, η κόρη της όμως όχι.",
		],
		textPosition:
			"top-5 left-[180px] w-[190px] sm:left-[225px] sm:top-10 sm:w-[500px] md:w-[350px] md:text-xl lg:left-[300px] lg:w-[45%]",
		delay: 300,
	},
	{
		src: "/images/intro/tree.png",
		alt: DEFAULT_ALT,
		width: 1424,
		height: 721,
		imgPosition:
			"-right-10 top-[220px] w-[400px] sm:w-[500px] sm:top-[130px] md:w-[600px] md:top-[80px] lg:w-[800px]",
		text: [
			"Ετούτα είναι μαλακά σαν το βαμβάκι. Στεναχωριέσαι που θα κοιμάμαι στη σκιά ενός τόσο όμορφου δέντρου;",
			"Κοίταξε ψηλά τα κλαδιά του δέντρου, που σαν ομπρέλα απλωνόντουσαν πάνω από το κεφάλι του.",
			"Καλό θα μας κάνει να φύγουμε απ’ αυτό το σπίτι που κάθε φορά που διαβαίνουμε την εξώπορτά του βλέπουμε απέναντί μας ετούτο το καταραμένο δέντρο",
		],
		textPosition:
			"text-right top-16 right-10 w-[45%] sm:top-12 sm:w-[70%] md:top-[45%] md:w-[450px] lg:top-[500px] lg:right-[5%] lg:w-[40%]",
		delay: 800,
	},
	{
		src: "/images/intro/girl.png",
		alt: DEFAULT_ALT,
		width: 1078,
		height: 1135,
		imgPosition:
			"right-[20%] bottom-0 w-[500px] sm:-left-10 sm:w-[650px] lg:left-10 lg:w-[700px]",
		text: [
			"Λυπήσου το κορίτσι που θα ξεσπάσει επάνω του, λυπήσου και τη μάνα της που δεν θα βγει ζωντανή από τα χέρια του.",
			"Το κορίτσι πετάχτηκε όρθιο, υπερβολικά ταραγμένο και τρέμοντας ρώτησε: «Ποιος έκλεψε αφέντη; Εγώ; Εγώ έκανα τέτοιο πράγμα;",
			"Πεσμένο ανάσκελα στο πάτωμα το κορίτσι, ακουμπούσε το χέρι της στο χάρτινο κουτί, που από μέσα ακουγόταν το μωρό να κλαίει ασταμάτητα",
		],
		textPosition:
			"text-right right-[60%] w-[170px] bottom-[380px] sm:text-right sm:w-[300px] sm:left-[50px] sm:bottom-[520px] lg:w-[400px] lg:left-[800px] lg:bottom-[350px] lg:text-left ",
		delay: 1000,
	},
];

const Heading = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className="flex absolute top-[300px] left-[10%]">
			<div
				className={`transition-opacity duration-1000 delay-[1200ms] ${
					!mounted ? "opacity-0" : "opacity-100"
				} w-[300px] sm:w-[600px] md:w-[900px] lg:w-[1000px] flex-col`}
			>
				<h1
					className={`${
						!mounted ? "text-white" : "text-[#A24F70]"
					} m-4 text-left transition-colors duration-1000 delay-[2000ms] w-0 sm:w-auto font-vollkorn text-7xl md:text-8xl`}
				>
					{TITLE}
				</h1>
				<div
					className={`transition-opacity duration-1000 delay-[2000ms] ${
						!mounted ? "opacity-0" : "opacity-100"
					} text-right`}
				>
					<h5 className="my-4 font-notoserif text-xl sm:text-2xl md:text-4xl text-gray-200">
						{DESCRIPTION}
					</h5>
				</div>
			</div>
		</div>
	);
};

type InteractiveImageProps = {
	imgProps: imgProps;
};

const InteractiveImage = (props: InteractiveImageProps) => {
	const { imgProps } = props;
	const [textIndex, setTextIndex] = useState(-1);
	const [active, setActive] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const incrementTextIndex = () => {
		textIndex < TEXT_LEN - 1
			? setTextIndex(textIndex + 1)
			: setTextIndex(0);
	};

	const activateImage = () => {
		incrementTextIndex();
		setActive(true);
	};

	const deactivateImage = () => {
		setActive(false);
	};

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
				onClick={() => (active ? deactivateImage() : activateImage())}
				onMouseEnter={() => activateImage()}
				onMouseLeave={() => deactivateImage()}
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
					{`"${imgProps.text[textIndex]}"`}
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
	return (
		<div className="relative h-full min-h-[1125px] bg-black">
			<OrderBlock />
			{IMAGE_PROPS.map((imgProps) => (
				<InteractiveImage key={imgProps.src} imgProps={imgProps} />
			))}
			<Heading />
		</div>
	);
}
