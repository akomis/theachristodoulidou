import Image from "next/image";
import OrderButton from "../components/orderButton";
import KouklaCover from "../public/images/book_covers/koukla.webp";
import Title from "../components/title";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const EBOOK_LINKS = [
	{ shop: "Apple Books", url: "https://books.apple.com" },
	{
		shop: "Barnes & Noble",
		url: "https://www.barnesandnoble.com",
	},
];

const Ebook = () => {
	return (
		<div className="flex flex-col sm:flex-row mb-10 w-full">
			<div className="w-[70%] sm:w-full flex-1 m-4 sm:m-10 mx-auto border-4 border-koukla rounded">
				<Image
					src={KouklaCover}
					alt={"Εξώφυλλο - Κούκλα"}
					layout={"responsive"}
				/>
			</div>
			<div className="w-[80%] sm:w-full mx-auto m-4 sm:m-10 flex flex-col flex-[2] justify-center items-center sm:items-start ">
				<h2 className="text-3xl sm:text-4xl md:text-5xl text-center sm:text-left text-gray-200 font-bold font-vollkorn">
					<span className="text-koukla">Κούκλα</span> ebook
				</h2>
				<h4 className="text-lg text-center sm:text-left text-gray-300 font-bold font-vollkorn">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</h4>
				<OrderButton
					ebookLinks={EBOOK_LINKS}
					buttonStyle="bg-koukla hover:bg-orange-500 border-b-4 border-orange-900"
					linkStyle="hover:text-koukla"
					modalStyle="border-koukla"
				/>
			</div>
		</div>
	);
};

const YoutubePlayer = () => {
	return (
		<div className="max-w-[800px] ml-auto hover:drop-shadow-dark duration-200 rounded border-2 sm:border-4 border-black">
			<LiteYouTubeEmbed
				playlist={true}
				id={"PLuhlsr-P09NaUH8iDRDtuBH7DuTkaswhL"}
				title={"Το Χάρτινο Κουτί - Θέα Χριστοδουλίδου"}
				playlistCoverId="_b6MHMlMjqc"
				poster={"sddefault"}
				webp
			/>
		</div>
	);
};

export default function Koukla() {
	return (
		<div className="section bg-stone-700">
			<div className="container flex-col">
				<div className="subcontainer">
					<Title text="Περισσότερα" />
					<Ebook />
					<YoutubePlayer />
				</div>
			</div>
		</div>
	);
}