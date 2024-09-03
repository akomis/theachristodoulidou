type TitleProps = {
  text: string;
  textAlign?: string;
};

export default function Title(props: TitleProps) {
  const { text, textAlign } = props;

  return (
    <h2
      className={`w-full mb-4 text-4xl sm:text-5xl text-offwhite font-bold font-vollkorn ${textAlign}`}
    >
      {text}
    </h2>
  );
}
