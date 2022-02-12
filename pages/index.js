import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import css from "../styles/home.module.scss";
import { createClient } from "contentful";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData(id, key) {
      const client = createClient({
        space: id,
        accessToken: key,
      });

      const res = await client.getEntries({ content_type: "workExample" });
      setData(res);
    }
    getData(process.env.CONTENTFUL_SPACE_ID, process.env.CONTENTFUL_ACCESS_KEY);
  }, []);
  console.log(process.env.workExample);
  return (
    <div className={css.container}>
      <Head>
        <title>ES personal site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Header title="Welcome to my personal site!" />
          <p className="description">
            My name is Elliott Stevens and I am a software engineer. <br></br>
            {"Here is some of my work."}
          </p>
        </div>
        <div></div>
      </main>
      <Footer />
    </div>
  );
}
