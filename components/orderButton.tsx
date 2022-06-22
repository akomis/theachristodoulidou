import { useState } from "react";
import Modal from "react-modal";

const modalStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		borderWidth: 3,
		borderColor: "lightgrey",
		borderRadius: 15,
		backgroundColor: "#F9FBEE",
	},
	overlay: {
		backgroundColor: "rgba(0,0,0,0.7)",
	},
};

type ebookLinks = {
	shop: string;
	url: string;
};

type OrderButtonProps = {
	ebookLinks: ebookLinks[];
	buttonStyle: string;
	linkStyle?: string;
	modalStyle?: string;
};

export default function OrderButton(props: OrderButtonProps) {
	const { ebookLinks, buttonStyle, linkStyle, modalStyle } = props;
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setIsModalOpen(true)}
				className={`my-5 sm:my-10 py-2 px-4 w-fit text-white text-xl sm:text-2xl font-bold duration-300 rounded ${buttonStyle}`}
			>
				Αγορά ➡
			</button>
			<Modal
				isOpen={isModalOpen}
				onRequestClose={() => setIsModalOpen(false)}
				closeTimeoutMS={500}
				style={modalStyles}
			>
				<p
					className={`text-3xl pb-3 text-center border-b-2 ${modalStyle}`}
				>
					Καταστήματα
				</p>

				<ul>
					{ebookLinks.map((link, i) => (
						<li
							key={link.shop}
							className={`my-5 text-center ${linkStyle}`}
						>
							<a
								className="text-2xl sm:text-3xl font-bold p-5"
								href={link.url}
							>
								{link.shop}
							</a>
						</li>
					))}
				</ul>
			</Modal>
		</>
	);
}
