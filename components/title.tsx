type TitleProps = {
	text: string;
};

export default function Title(props: TitleProps) {
	const { text } = props;

	return (
		<h2 className="mb-4 text-4xl sm:text-5xl text-gray-300 font-bold font-vollkorn">
			{text}
		</h2>
	);
}
