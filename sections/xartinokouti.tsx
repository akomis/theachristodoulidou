import { useState } from "react";
import Image from "next/image";
import Title from "../components/title";
import FormInput from "../components/formInput";
import OrderButton from "../components/orderButton";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import {
	AiFillInstagram,
	AiFillFacebook,
	AiFillPhone,
	AiFillCheckCircle,
} from "react-icons/ai";
import toXartinoKoutiCover from "../public/images/book_covers/to_xartino_kouti.webp";

const EBOOK_LINKS = [
	{
		shop: "Read Library",
		url: "https://www.read-library.com/tauomicron-chi940rhotauiotanuomicron-kappaomicronupsilontau943.html",
	},
	{
		shop: "24 Symbols",
		url: "https://www.24symbols.com/book/ellenika/thea-christodoulidou/to-khartino-kouti?id=4121925",
	},
	{
		shop: "Apple Books",
		url: "https://books.apple.com/us/book/%CF%84%CE%BF-%CF%87%CE%AC%CF%81%CF%84%CE%B9%CE%BD%CE%BF-%CE%BA%CE%BF%CF%85%CF%84%CE%AF/id6442962746",
	},
	{
		shop: "Barnes & Noble",
		url: "https://www.barnesandnoble.com/w/to-xartino-kouti-thea-christodoulidou/1141640532?ean=2940166786197",
	},
];

const PREFACE_TEXT = [
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

const Ebook = () => {
	return (
		<div className="flex flex-col-reverse w-full sm:flex-row">
			<div className="w-[80%] sm:w-auto mx-auto m-4 sm:m-10 flex flex-col flex-[2] justify-center items-center sm:items-end ">
				<h2 className="text-3xl font-bold text-center text-gray-200 sm:text-4xl md:text-5xl sm:text-right font-vollkorn">
					<span className="text-primary">Το Χάρτινο Κουτί</span> τώρα
					και σε ebook!
				</h2>
				<OrderButton
					ebookLinks={EBOOK_LINKS}
					buttonStyle="bg-primary hover:bg-red-500 border-b-4 border-red-900"
					linkStyle="hover:text-primary"
					modalStyle="border-primary"
				/>
			</div>
			<div className="w-[80%] sm:w-auto h-fit mx-auto m-4 sm:m-10 flex-1 border-4 border-primary rounded">
				<Image
					src={toXartinoKoutiCover}
					alt="Εξώφυλλο - Το Χάρτινο Κουτί"
					layout="responsive"
					priority
				/>
			</div>
		</div>
	);
};

const Preface = () => {
	return (
		<div className="flex flex-col px-5 pb-3 rounded-lg h-subcontainer gradient-bg">
			<div className="overflow-y-scroll h-auto">
				<div className="antialiased scroll-smooth">
					{PREFACE_TEXT.map((paragraph, i) => (
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
			<p className="text-base sm:text-xl text-gray-300 font-notoserif">
				{"Ελίζα Χριστοφόρου, Φιλόλογος"}
			</p>
		</div>
	);
};

const Contact = () => {
	const [messageSent, setMessageSent] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [telephone, setTelephone] = useState("");
	const [acs, setAcs] = useState("");
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
				telephone: telephone,
				acs: acs,
			}),
		})
			.then(() => setMessageSent(true))
			.catch((error) => alert(error));
	};

	const sendDisable = messageSent || message.length === 0;

	return (
		<div className="flex flex-col justify-between h-subcontainer">
			<form
				className="flex flex-col justify-center items-center text-white"
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
					placeholder="Τηλέφωνο"
					type="telephone"
					autoComplete="telephone"
					name="telephone"
					value={telephone}
					readOnly={messageSent}
					onChange={(e) => {
						!isNaN(e.target.value) && setTelephone(e.target.value);
					}}
				/>
				<FormInput
					placeholder="Τοποθεσία ACS"
					type="text"
					name="acs"
					value={acs}
					readOnly={messageSent}
					onChange={(e) => {
						setAcs(e.target.value);
					}}
				/>
				<FormInput
					placeholder="Μήνυμα (*)"
					type="text"
					name="message"
					value={message}
					readOnly={messageSent}
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					large
					required
				/>
				<button
					className={`${
						sendDisable
							? "hover:cursor-not-allowed"
							: "duration-300 hover:drop-shadow-dark hover:text-black hover:bg-primary hover:rounded-none hover:border-black hover:cursor-pointer"
					} shadow ${
						!messageSent
							? "bg-black"
							: "text-black border-2 border-black bg-primary"
					} w-full rounded-md h-10 mt-4 text-xl font-bold`}
					type="submit"
					disabled={sendDisable}
				>
					{!messageSent ? (
						"Αποστολή"
					) : (
						<div className="flex justify-center items-center">
							{"Στάλθηκε!"}
							<div className="ml-2">
								<AiFillCheckCircle />
							</div>
						</div>
					)}
				</button>
			</form>
			<div className="flex flex-row justify-between items-center">
				<p className="text-sm text-white sm:text-xl md:text-base lg:text-lg">
					{"Τηλέφωνο παραγγελιών βιβλίου "}
					<a
						className="font-bold text-gray-200 transition-all duration-300 hover:drop-shadow-dark hover:text-primary"
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

export default function XartinoKouti() {
	return (
		<div className="section bg-stone-800">
			<div className="container">
				<Ebook />
			</div>
			<div className="container flex-col md:flex-row">
				<div className="subcontainer flex-[3]">
					<Title text="Πρόλογος" />
					<Preface />
				</div>
				<div className="subcontainer flex-[2] md:mt-[300px]">
					<Title text="Επικοινωνία" />
					<Contact />
				</div>
			</div>
		</div>
	);
}
