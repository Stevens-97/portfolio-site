import Head from "next/head";
import Footer from "../components/Footer";
import css from "../styles/home.module.scss";
import ProjectPortfolio from "../components/ProjectPortfolio";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <div className={css.container}>
      <Head>
        <title>ES personal site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AboutMe />
        <div>
          <ProjectPortfolio />
        </div>
      </main>
      <Footer />
    </div>
  );
}
