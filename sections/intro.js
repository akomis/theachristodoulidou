const orderNumber = "96754716";

export default function Intro() {
	return (
		<div className="flex flex-col justify-center items-center mx-auto h-screen bg-gradient-to-t from-zinc-900 to-stone-900 row section">
			<div className="w-[500px] lg:w-[1000px] xl:w-[1200px]">
				<h1 className="animate-fadeIn duration-200 font-serif italic text-8xl text-white m-4 text-left">
					Το χάρτινο κουτί
				</h1>
				<div className="text-right">
					<h5 className="my-4 font-sans text-3xl lg:text-4xl text-gray-300">
						Κυκλοφορεί αρχές Απριλίου
					</h5>
					<p className="text-xl text-gray-400 my-2">
						Τηλέφωνο παραγγελιών βιβλίου{" "}
						<a
							href={`tel:+357${orderNumber}`}
							className="font-bold hover:text-white hover:text-2xl duration-300"
						>
							{orderNumber}
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
