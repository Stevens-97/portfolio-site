import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import css from "../styles/home.module.scss";
export default function Home() {
  return (
    <div className={css.container}>
      <Head>
        <title>ES personal site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Welcome to my personal site!" />
        <p className="description">
          My name is Elliott Stevens and I am a software engineer. <br></br>
          {"Here is some of my work."}
        </p>
      </main>
      <Footer />
    </div>
  );
}
