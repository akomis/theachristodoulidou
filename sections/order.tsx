const ORDER_DETAILS = "Τηλέφωνο παραγγελιών βιβλίου ";
const [TEL_CODE, TEL_NUMBER] = ["+357", "96754716"];

export default function Order() {
	return (
		<div className="text-right h-[120px] pr-5 md:pr-[5%] lg:pr-[10%] flex flex-col justify-center items-end text-xl md:w-auto md:text-2xl bg-stone-900">
			<p className="font-sans w-[200px] sm:w-[300px] md:w-[500px] text-gray-300">
				{ORDER_DETAILS}
			</p>
			<a
				href={`tel:${TEL_CODE}${TEL_NUMBER}`}
				className="font-bold text-gray-400 hover:text-white md:hover:text-3xl  hover:text-4xl duration-300"
			>
				{TEL_NUMBER}
			</a>
		</div>
	);
}
