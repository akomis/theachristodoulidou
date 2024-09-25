import Image from "next/image";
import OrderButton from "../components/orderButton";
import KouklaCover from "../public/images/book_covers/koukla.webp";
import Title from "../components/title";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const EBOOK_LINKS = [
  {
    shop: "Read Library",
    url: "https://www.read-library.com/kappaomicron973kappalambdaalpha.html",
  },
  {
    shop: "24 Symbols",
    url: "https://www.24symbols.com/book/ellenika/thea-christodoulidou/koukla?id=4148608",
  },
  // {
  //   shop: "Rakuten kobo",
  //   url: "https://www.kobo.com/ww/en/ebook/Kp7nEkVyazO5RWi85u77qg",
  // },
  // {
  //   shop: "Apple Books",
  //   url: "https://books.apple.com/us/book/%CE%BA%CE%BF%CF%8D%CE%BA%CE%BB%CE%B1/id6443012509",
  // },
  // {
  //   shop: "Barnes & Noble",
  //   url: "https://www.barnesandnoble.com/w/koykla-thea-christodoulidou/1141680852?ean=2940166789655",
  // },
  // {
  //   shop: "Overdrive",
  //   url: "https://www.overdrive.com/media/9323039",
  // },
];

const Ebook = () => {
  return (
    <div className="flex flex-col mb-10 w-full sm:flex-row">
      <div className="w-[70%] h-fit sm:w-full flex-1 m-4 sm:m-10 mx-auto border-4 border-koukla rounded">
        <Image
          src={KouklaCover}
          alt="Εξώφυλλο - Κούκλα"
          layout="responsive"
          priority
        />
      </div>
      <div className="w-[90%] sm:w-full mx-auto m-4 sm:m-10 flex flex-col flex-[2] justify-center items-center sm:items-start ">
        <h2 className="text-3xl font-bold text-center text-gray-200 sm:text-4xl md:text-5xl sm:text-left font-vollkorn">
          <span className="text-koukla">Κούκλα</span> ebook
        </h2>
        <h4 className="text-base sm:text-xl text-center sm:text-left text-gray-200">
          <p>
            Ένα όλως διόλου ανθρώπινο κείμενο, μια ανθρώπινη ιστορία που αγγίζει
            τις πιο ευαίσθητες χορδές μας και προκαλεί ταυτόχρονα όλα τα
            συναισθήματα που μπορεί να αναπτύξει κάποιος. Διαβάζοντάς το γελάς,
            αγωνιάς, θυμώνεις, μελαγχολείς και θέλεις να αγκαλιάσεις όλους τους
            χαρακτήρες, τους οποίους γνωρίζεις πάρα πολύ καλά, γιατί αυτοί οι
            χαρακτήρες είμαστε όλοι εμείς, με τις αδυναμίες, τα πάθη, τις
            αγωνίες, τους πόθους και τις ιδιαιτερότητές μας.
          </p>
          <p className="text-base sm:text-xl text-gray-300 font-notoserif">
            Δρ. Νέαρχος Ιωάννου
          </p>
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
    <div className="section bg-stone-800">
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
