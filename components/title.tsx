type TitleProps = {
	text: string;
};

export default function Title(props: TitleProps) {
	const { text } = props;

	return (
		<h2 className="text-4xl mb-2 sm:text-5xl font-bold font-vollkorn">
			{text}
		</h2>
	);
}
