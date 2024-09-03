import Image from "next/image";
import { useEffect, useState } from "react";
import doll from "../public/images/intro/doll.webp";
import tree from "../public/images/intro/tree.webp";
import girl from "../public/images/intro/girl.webp";

type imgProps = {
  src: StaticImageData;
  imgPosition: string;
  textPosition: string;
  delay: string;
};

const TITLE = "Το Χάρτινο Κουτί";
const BG_TEXT = [
  "Μια καθηλωτική αφήγηση με κεντρική ηρωίδα την Φαίδρα η οποία πλαισιώνεται από τα πρόσωπα που θα καθορίσουν την πορεία και τη μοίρα της.",
  "Μια γυναίκα που κάθε φορά που επιχειρούσε μια απονενοημένη έξοδο, έπεφτε σε χειρότερη δύνη.",
  "Μια τόσο αληθινή ηρωίδα, που ο αναγνώστης παίρνοντας το βιβλίο στα χέρια του, δύσκολα μπορεί να αποχωριστεί.",
  "Γίνεται μέρος της ιστορίας, μοιράζεται τα πάθη και τις αγωνίες των ηρώων, ταυτίζεται, παίρνει θέση και διαμορφώνει στάση.",
  "Μια ιστορία που ψηλαφεί τις πιο σκοτεινές περιοχές της ανθρώπινης φύσης και που τελικά μας οδηγεί στην απόλυτη κάθαρση.",
  "Ένα μυθιστόρημα που αξίζει να διαβαστεί και να ταξιδέψει σε πολλά χέρια.",
];
const DEFAULT_IMG_INTRO_ALT =
  "To Xartino Kouti Book Cover - Το Χάρτινο Κουτί Εξώφυλλο";
const IMAGE_PROPS = [
  {
    src: doll,
    imgPosition:
      "-rotate-[20deg] -left-10 top-20 w-[200px] sm:w-[250px] lg:w-[300px]",
    textPosition:
      "top-10 left-[180px] w-[50%] sm:left-[225px] sm:top-10 sm:w-[500px] md:w-[350px] md:text-xl lg:left-[300px] lg:w-[45%]",
    delay: "delay-[300ms]",
  },
  {
    src: tree,
    imgPosition:
      "-right-10 top-[200px] w-[400px] sm:w-[500px] sm:top-[130px] md:w-[600px] md:top-[80px] lg:w-[800px]",
    textPosition:
      "text-right top-[360px] right-26 w-[70%] sm:right-10 sm:top-12 sm:w-[70%] md:right-10 md:top-[450px] md:w-[450px] lg:top-[500px] lg:right-[5%] lg:w-[40%]",
    delay: "delay-[800ms]",
  },
  {
    src: girl,
    imgPosition:
      "right-[20%] bottom-0 w-[500px] sm:-left-10 sm:w-[650px] lg:left-10 lg:w-[700px]",
    textPosition:
      "text-center right-5 w-[120px] bottom-[420px] sm:text-xl sm:text-right sm:w-[300px] sm:left-[50px] sm:bottom-[520px] lg:w-[400px] lg:left-[800px] lg:bottom-[350px] lg:text-left ",
    delay: "delay-[1000ms]",
  },
];

const Heading = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`absolute left-0 right-0 mx-auto transition-opacity duration-[1200ms] delay-[1600ms] top-[450px] sm:top-[300px] ${
        !mounted ? "opacity-0" : "opacity-100"
      } w-[350px] sm:w-[600px] md:w-[900px] lg:w-[1000px] flex-col`}
    >
      <h1
        className={`${
          !mounted
            ? "text-white"
            : "bg-gradient-to-r from-red-900 via-primary to-fuchsia-900 bg-clip-text text-transparent"
        } m-4 text-center text-5xl sm:text-7xl transition-colors duration-1000 delay-[2000ms] sm:w-auto font-vollkorn md:text-8xl`}
      >
        {TITLE}
      </h1>
    </div>
  );
};

type InteractiveImageProps = {
  imgProps: imgProps;
  textIndex: number;
  active: boolean;
};

const InteractiveImage = (props: InteractiveImageProps) => {
  const { imgProps, textIndex, active } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ${imgProps.delay} ${
        !mounted ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`absolute transition-all duration-500 ${
          imgProps.imgPosition
        } ${
          !active ? "grayscale" : "grayscale-0 scale-105 -translate-y-[14px]"
        }`}
      >
        <Image
          src={imgProps.src}
          alt={DEFAULT_IMG_INTRO_ALT}
          layout={"responsive"}
          priority
        />
      </div>
      <div
        className={`absolute transition-opacity duration-500 sm:text-xl md:text-2xl lg:text-3xl ${
          imgProps.textPosition
        } 
		${!active ? "opacity-0" : "opacity-100"}`}
      >
        <p className="italic font-vollkorn font-light text-gray-300">
          {`"${BG_TEXT[textIndex]}"`}
        </p>
      </div>
    </div>
  );
};

export default function Intro() {
  const [textIndex, setTextIndex] = useState(-1);
  const [pause, setPause] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      // Initial delay (3s) of the propshow (until everything shows up like title)
      setTimeout(() => setTextIndex(0), 3000);
      setMounted(true);
    } else {
      // Change prop every 6 seconds (propshow)
      setTimeout(() => {
        setPause(true);
        setTimeout(() => {
          textIndex < BG_TEXT.length - 1
            ? setTextIndex(textIndex + 1)
            : setTextIndex(0);
          setPause(false);
        }, 500);
      }, 6000);
    }
  }, [textIndex]);

  return (
    <div className="relative h-full min-h-[1125px] bg-black">
      {IMAGE_PROPS.map((imgProps, i) => (
        <InteractiveImage
          key={i}
          imgProps={imgProps}
          textIndex={textIndex}
          active={(i === textIndex || i + 3 === textIndex) && !pause}
        />
      ))}
      <Heading />
    </div>
  );
}
