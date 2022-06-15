import { ChangeEvent } from "react";

type FormInputProps = {
	placeholder: string;
	type: string;
	name: string;
	value: string;
	onChange: (e: ChangeEvent<any>) => void;
	readOnly: boolean;
	autoComplete?: string;
	large?: boolean;
	required?: boolean;
};

export default function FormInput(props: FormInputProps) {
	const {
		placeholder,
		type,
		name,
		value,
		onChange,
		readOnly,
		autoComplete,
		large,
		required,
	} = props;

	const styles = `${
		!readOnly ? "bg-white" : "bg-gray-300 text-black"
	} my-2 p-4 w-full shadow text-black ring ring-black focus:ring focus:ring-gray-600 focus:outline-none`;

	return large ? (
		<textarea
			className={`${styles} min-h-[180px] max-h-[180px]`}
			name={name}
			value={value}
			onChange={onChange}
			readOnly={readOnly}
			placeholder={placeholder}
			autoComplete={autoComplete ?? "none"}
			required={required ?? false}
		/>
	) : (
		<input
			className={`${styles} h-12`}
			name={name}
			value={value}
			onChange={onChange}
			readOnly={readOnly}
			placeholder={placeholder}
			type={type}
			autoComplete={autoComplete ?? "none"}
			required={required ?? false}
		/>
	);
}
