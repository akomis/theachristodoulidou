import { ChangeEvent, useState } from "react";
import Title from "../components/title";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
	AiFillInstagram,
	AiFillFacebook,
	AiFillPhone,
	AiFillCheckCircle,
} from "react-icons/ai";

const INTRO_TEXT = [
	"Η Θέα Χριστοδουλίδου, μετά το πρώτο της μυθιστόρημα «η Κούκλα», επανέρχεται στην πεζογραφία αυτή τη φορά με «Το χάρτινο κουτί». Μια σύγχρονη συγκλονιστική ιστορία που παραπέμπει σε αρχαία ελληνική τραγωδία μιας και η πλοκή περιέχει όλα τα στάδια του σχήματος: ύβρις→ άτη→ νέμεσις→ τίσις. Μια καθηλωτική αφήγηση με κεντρική ηρωίδα την Φαίδρα η οποία πλαισιώνεται από τα πρόσωπα που θα καθορίσουν την πορεία και τη μοίρα της.",
	"Μια γυναίκα που ενώ το μόνο που θέλησε «ήταν να ζήσει μια ήσυχη ζωή, όπως τόσοι άνθρωποι σ’ αυτή τη γη», βρέθηκε στη δύνη συμβάντων και γεγονότων που την οδήγησαν σε ένα κακοτράχαλο μονοπάτι χωρίς επιστροφή.",
	"Μια γυναίκα, που όπως η ίδια ομολογεί, «μια άσπρη κόλλα χαρτί ήταν η δική μου ζωή, που τίποτα δεν με άφησαν να γράψω επάνω. Άλλοι κρατούσανε τις πένες και τα μολύβια και γράφανε αυτά που θέλανε εκείνοι».",
	"Η Θέα Χριστοδουλίδου παίρνοντας τη δική της πένα δίνει σώμα και πνοή στη Φαίδρα και την βάζει να αφηγηθεί την τραγική ιστορία της. Άλλοτε σε πρώτο πρόσωπο, άλλοτε διά μέσω του επινοημένου αφηγητή, καταθέτει στον αναγνώστη κάτι πολύ περισσότερο από ένα μυθιστόρημα:",
	"«Το χάρτινο κουτί» περιέχει τη λαχανιασμένη ανάσα εκείνων των γυναικών της Κύπρου του πρώτου μισού του 20ου αιώνα. Των γυναικών που έζησαν (ή και επέζησαν) στη σκιά των συζύγων, των πατεράδων, των γιων και των αδελφών τους. Των γυναικών που η μοίρα και η τύχη τους, από τη στιγμή της γέννησής, τους βρισκόταν αποκλειστικά στο έλεος των αντρών. Των γυναικών που μάτωναν τα χείλη τους πνίγοντας στη σιωπή ποταμούς δακρύων που έτρεχαν μόνο στα σκοτεινά, θάλασσες λέξεων που δεν αρθρώθηκαν ποτέ, κραυγές πόνου που έσκαβαν αργά αργά το δέρμα τους αφήνοντας βαθιές χαρακιές στα - άλλοτε - κοριτσίστικα πρόσωπά τους. Γυναικών που υπέμεναν χωρίς να ζητούν, περιμένουν, χωρίς να ελπίζουν...",
	"Και εκείνων των γυναικών που σήκωσαν το σακατεμένο τους ανάστημα παίρνοντας πίσω το δίκιο τους με τα ίδια τους τα χέρια. Κι ας ήξεραν ότι αυτό θα ήταν το τελευταίο πράγμα που θα κάνουν. Κι ας ήξεραν ότι το βαρύ τίμημα που θα πληρώσουν θα έμοιαζε με χάδι μπροστά στο τίμημα που πλήρωναν μια ζωή επειδή γεννήθηκαν... γυναίκες. Μια τέτοια γυναίκα ήταν η Φαίδρα. Μια γυναίκα που κάθε φορά που επιχειρούσε μια απονενοημένη έξοδο, έπεφτε σε χειρότερη δύνη. Μια γυναίκα που ακόμα και τη μοναδική φορά που της χαμογέλασε η ζωή, επέλεξε να γυρίσει την πλάτη της πεπεισμένη πια πως δεν της αξίζει ούτε μια πιθανότητα ευτυχίας. Μια γυναίκα που έσβησε την ύπαρξη της από τα κατάστιχα κι έζησε με άλλο όνομα περιμένοντας κάτι να αλλάξει. Μια γυναίκα που με τη δική της ιστορία, άξιζε να γίνει μυθιστορηματική ηρωίδα. Και η Θέα Χριστοδουλίδου κατάφερε να δημιουργήσει μια τόσο αληθινή ηρωίδα, που ο αναγνώστης παίρνοντας το βιβλίο στα χέρια του, δύσκολα μπορεί να αποχωριστεί.",
	"Ο αναγνώστης ζει ανάμεσα στις σελίδες του βιβλίου, μεταφέρεται αβίαστα στον τόπο και τον χρόνο. Και αυτό είναι νομίζω, το βασικό κριτήριο για να αξιολογήσει κανείς ένα μυθιστόρημα. Αυτό συνιστά το ένστικτο και το αισθητήριο του αναγνώστη. Να μπορέσει να ζήσει ανάμεσα στις σελίδες του. Να γίνεται αυτόπτης και αυτήκοος μάρτυρας, να αποκτά υπόσταση μέσα στην πλοκή σαν να είναι παρόν σε κάθε σκηνή.",
	"Το πλάσιμο και η ψυχογράφηση των χαρακτήρων που ζωντανεύουν, η εναλλαγή στις αφηγήσεις, οι μονόλογοι, η παραστατική περιγραφή των χώρων και του τοπίου και η εμπνευσμένη σκηνογραφία συνθέτουν και αναπαριστούν με απόλυτο ρεαλισμό την ατμόσφαιρα μέσα στην οποία διαδραματίζεται η ιστορία. Η Θέα Χριστοδουλίδου επιτυγχάνει σε τέτοιο βαθμό τη δημιουργία αυτής της ατμόσφαιρας ώστε πολύ σύντομα ο αναγνώστης γίνεται μέρος της, μοιράζεται τα πάθη και τις αγωνίες των ηρώων, ταυτίζεται, παίρνει θέση και διαμορφώνει στάση.",
	"Ο αναγνώστης παρακολουθεί την ιστορία της Φαίδρας μέσα από ένα ταξίδι αναζήτησης της αλήθειας αλλά και αποκάλυψης του παρελθόντος. Μιας ιστορίας που αναδιπλώνεται με φόντο την Kύπρο του προηγούμενου αιώνα, που εστιάζει στα πάθη της μικρής κοινωνίας, στην βαρβαρότητα του ηθικώς ορθού, στις επιταγές της πατριαρχίας και στους νόμους της αγίας κυπριακής οικογένειας... Κάτω από το σκληρό περίβλημα μιας αρχέγονης ηθικής τάξης, πάλλεται η ανθρώπινη αδυναμία, ο φλογερός αδιέξοδος έρωτας, η ανεκπλήρωτη αγάπη. Πάλλεται να γεννηθεί ο νέος κόσμος... που δεν κατάφερε να γεννηθεί ακόμα.",
	"Όπως και στο προηγούμενο μυθιστόρημά της, την «Κούκλα», η Θέα Χριστοδουλίδου καταπιάστηκε και πάλι συνειδητά με την μοίρα των γυναικών της Κύπρου, με την πάλη και τον αγώνα τους, με την «α-σθένεια» και το σθένος του φύλου τους. Η Θέα Χριστοδουλίδου καταφέρνει για άλλη μια φορά να καταγράψει πολύ γλαφυρά την εποχή όπου η γυναίκα - χωρίς υπόσταση και χωρίς φωνή - αποτελούσε κτήμα της πατριαρχικής κυπριακής οικογένειας, ήταν υπόλογη στην κοινωνία, ήταν αναγκασμένη εξ’ ορισμού να θάψει βαθιά μέσα της κάθε όνειρο, κάθε της επιθυμία, κάθε προσωπική της ανάγκη, κάθε σκέψη ή ιδέα. Ήταν καταραμένη από την ομορφιά και την αρχέγονη μοίρα της να είναι απλώς μια άφωνη ύπαρξη, μια παράταιρη παρουσία, ένα ψυχικά και ηθικά ακρωτηριασμένο ον, ένα χάρτινο κουτί.",
	"«Το χάρτινο κουτί» είναι λοιπόν ένα μυθιστόρημα που αξίζει να διαβαστεί και να ταξιδέψει σε πολλά χέρια. Είναι ένα μυθιστόρημα που φωτίζει μια σκοτεινή εποχή στην κοινωνική ιστορία της Κύπρου, που αποκαλύπτει την τραγική μοίρα των γυναικών, που ψηλαφεί τις πιο σκοτεινές περιοχές της ανθρώπινης φύσης και που τελικά μας οδηγεί στην απόλυτη κάθαρση...",
];

const Preface = () => {
	return (
		<div className="h-subcontainer flex flex-col px-5 pb-3 rounded-lg gradient-bg">
			<div className="h-auto overflow-y-scroll ">
				<div className="scroll-smooth antialiased">
					{INTRO_TEXT.map((paragraph, i) => (
						<p
							key={`paragraph-${i}`}
							className="mb-5 text-base sm:text-xl text-gray-200"
						>
							{paragraph}
						</p>
					))}
				</div>
			</div>
			<hr className="mt-4 mb-2 w-1/2" />
			<p className="font-notoserif text-base sm:text-xl text-gray-300">
				{"Ελίζα Χριστοφόρου, Φιλόλογος"}
			</p>
		</div>
	);
};

type FormInputProps = {
	placeholder: string;
	type: string;
	name: string;
	value: string;
	onChange: (e: ChangeEvent<any>) => void;
	readOnly: boolean;
	autoComplete?: string;
	large?: boolean;
};

const FormInput = (props: FormInputProps) => {
	const {
		placeholder,
		type,
		name,
		value,
		onChange,
		readOnly,
		autoComplete,
		large,
	} = props;

	const styles = `${
		!readOnly ? "bg-white" : "bg-gray-300 text-black"
	} my-2 p-4 w-full shadow text-black ring ring-black focus:ring focus:ring-gray-600 focus:outline-none`;

	return large ? (
		<textarea
			className={`${styles} min-h-[300px] max-h-[300px]`}
			name={name}
			value={value}
			onChange={onChange}
			readOnly={readOnly}
			placeholder={placeholder}
			autoComplete={autoComplete ?? "none"}
			required
		/>
	) : (
		<input
			className={`${styles} h-10`}
			name={name}
			value={value}
			onChange={onChange}
			readOnly={readOnly}
			placeholder={placeholder}
			type={type}
			autoComplete={autoComplete ?? "none"}
			required
		/>
	);
};

const Contact = () => {
	const [messageSent, setMessageSent] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const encode = (data: any) => {
		return Object.keys(data)
			.map(
				(key) =>
					encodeURIComponent(key) +
					"=" +
					encodeURIComponent(data[key])
			)
			.join("&");
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": "contact",
				name: name,
				email: email,
				message: message,
			}),
		})
			.then(() => setMessageSent(true))
			.catch((error) => alert(error));
	};

	const sendDisable =
		messageSent ||
		name.length === 0 ||
		email.length === 0 ||
		message.length === 0;

	return (
		<div className="h-subcontainer flex flex-col justify-between">
			<form
				className="text-white flex flex-col justify-center items-center"
				data-netlify={true}
				netlify-honeypot="bot-field"
				name="contact"
				method="POST"
				onSubmit={handleSubmit}
			>
				<input type="hidden" name="form-name" value="contact" />
				<FormInput
					placeholder="Όνομα"
					type="text"
					autoComplete="name"
					name="name"
					value={name}
					readOnly={messageSent}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<FormInput
					placeholder="E-mail"
					type="email"
					autoComplete="email"
					name="email"
					value={email}
					readOnly={messageSent}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<FormInput
					placeholder="Μήνυμα"
					type="text"
					name="message"
					value={message}
					readOnly={messageSent}
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					large
				/>
				<button
					className={`${
						sendDisable
							? "hover:cursor-not-allowed"
							: "hover:drop-shadow-dark hover:text-black hover:bg-primary hover:rounded-none hover:border-black hover:cursor-pointer duration-300"
					} shadow ${
						!messageSent
							? "bg-black"
							: "bg-primary text-black border-2 border-black"
					} w-full rounded-md h-10 mt-4 text-xl font-bold`}
					type="submit"
					disabled={sendDisable}
				>
					{!messageSent ? (
						"Αποστολή"
					) : (
						<div className="flex items-center justify-center">
							{"Στάλθηκε!"}
							<div className="ml-2">
								<AiFillCheckCircle />
							</div>
						</div>
					)}
				</button>
			</form>
			<div className="h-[100px] flex flex-row justify-between items-center">
				<p className="text-white text-base sm:text-lg">
					{"Τηλέφωνο παραγγελιών βιβλίου "}
					<a
						className="text-gray-200 transition-all duration-300 font-bold hover:drop-shadow-dark hover:text-primary"
						href="tel:+35796754716"
					>
						96754716
					</a>
				</p>
				<a
					className="transition-all duration-300 hover:drop-shadow-dark hover:text-primary"
					href="tel:+35796754716"
				>
					<AiFillPhone size={60} />
				</a>
				<a
					className="transition-all duration-300 hover:drop-shadow-dark hover:text-primary"
					href="https://www.instagram.com/theachristodoulidou/"
				>
					<AiFillInstagram size={60} />
				</a>
				<a
					className="transition-all duration-300 hover:drop-shadow-dark hover:text-primary"
					href="https://www.facebook.com/theachristodoulidoupage/"
				>
					<AiFillFacebook size={60} />
				</a>
			</div>
		</div>
	);
};

const VIDEO_PROPS = [
	{
		src: "https://www.youtube.com/embed/_O2OvWLf0rA",
		title: "«ΤΟ ΧΑΡΤΙΝΟ ΚΟΥΤΙ», ΜΙΑ ΣΥΓΧΡΟΝΗ ΣΥΓΚΛΟΝΙΣΤΙΚΗ ΙΣΤΟΡΙΑ",
	},
	{
		src: "https://www.youtube.com/embed/vuh5aBGut64",
		title: 'Θέα Χριστοδουλίδου: "Είμαι κατάφορα ενάντια στον διδακτισμό"',
	},
	{
		src: "https://www.youtube.com/embed/_b6MHMlMjqc",
		title: 'Το Χάρτινο Κουτί - "ΗΡΘΕ & ΕΔΕΣΕ"',
	},
];

export default function XartinoKouti() {
	return (
		<div className="section bg-stone-800">
			<div className="container flex-col md:flex-row">
				<div className="subcontainer flex-[3]">
					<Title text="Πρόλογος" />
					<Preface />
				</div>
				<div className="subcontainer flex-[2]">
					<Title text="Επικοινωνία" />
					<Contact />
				</div>
			</div>
			<div className="container">
				<div className="subcontainer">
					<Carousel
						centerMode
						swipeable
						emulateTouch
						showIndicators
						infiniteLoop
						dynamicHeight
						autoPlay
						interval={5000}
						transitionTime={500}
						centerSlidePercentage={100}
						showThumbs={false}
						showStatus={false}
						aria-label="videos"
					>
						{VIDEO_PROPS.map((videoProps, i) => (
							<div key={i}>
								<iframe
									className="rounded hover:drop-shadow-dark duration-200 border-4 border-black h-[200px] sm:h-[400px]"
									src={videoProps.src}
									title={videoProps.title}
									allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									frameBorder="0"
								></iframe>
							</div>
						))}
					</Carousel>
				</div>
			</div>
		</div>
	);
}
