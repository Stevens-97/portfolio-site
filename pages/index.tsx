import Head from "next/head";
import css from "../styles/home.module.scss";
// import ProjectPortfolio from "../components/ProjectPortfolio";
import AboutMe from "../components/AboutMe";

export default function Home() {
    return (
        <div className={css.container}>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            ></meta>
            <Head>
                <title>ElliottCodes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <AboutMe />
            </main>
            <span className="section-break"></span>
        </div>
    );
}
