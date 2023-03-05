import Head from "next/head";
import HomePage from "@/components/home/home-page";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Events</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}

//za dinamicne pageove treba nam getstaticpaths i getstaticprops, a za staticne treba nam samo getstaticprops
