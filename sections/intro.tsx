import Image from "next/image";

type Img = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

type BackgroundImageProps = {
	bwImg: Img;
	colorImg: Img;
	hoverText: string;
};

const TITLE = "Το χάρτινο κουτί";
const DESCRIPTION = "Κυκλοφορεί αρχές Απριλίου";
const ORDER_DETAILS = "Τηλέφωνο παραγγελιών βιβλίου ";
const [TEL_CODE, TEL_NUMBER] = ["+357", "96754716"];

const TextContent = () => {
	return (
		<div className="flex grow justify-center items-center">
			<div className="w-[350px] sm:w-[600px] md:w-[900px] lg:w-[1200px] flex-col mb-60">
				<h1 className="w-0 sm:w-auto font-vollkorn text-7xl md:text-8xl text-white m-4 text-left">
					{TITLE}
				</h1>
				<div className="text-right">
					<h5 className="my-4 font-notoserif text-2xl md:text-4xl text-gray-200">
						{DESCRIPTION}
					</h5>
					<p className="font-sans text-xl md:text-2xl text-gray-300 mt-1">
						{ORDER_DETAILS}
						<a
							href={`tel:${TEL_CODE}${TEL_NUMBER}`}
							className="font-bold hover:text-white hover:text-2xl duration-300"
						>
							{TEL_NUMBER}
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

const BackgroundImage = (props: BackgroundImageProps) => {
	const { bwImg, colorImg, hoverText } = props;

	return (
		<div>
			<Image
				src={bwImg.src}
				alt={bwImg.alt}
				width={bwImg.width}
				height={bwImg.height}
			/>
			<Image
				src={colorImg.src}
				alt={colorImg.alt}
				width={colorImg.width}
				height={colorImg.height}
			/>
		</div>
	);
};

export default function Intro() {
	return (
		<div className="section bg-gradient-to-t from-[black] to-stone-900">
			<TextContent />
		</div>
	);
}
