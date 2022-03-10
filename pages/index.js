import SEO from "../components/seo";
import Screen from "../components/screen";
import Intro from "../components/intro";

export default function Home() {
  return (
    <>
      <SEO />
      <Screen>
        <Intro/>
      </Screen>
    </>
  );
}
