import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import Nav from "~/components/Nav";
import { Bebas_Neue, Roboto_Condensed, Raleway } from "next/font/google";
import Hero from "~/components/Hero";
import LeftTab from "~/components/LeftTab";
import { useState } from "react";
import useScrollPosition from "~/utils/useScrollPosition";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--bebas-font",
});

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--roboto-font",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: "400",
  variable: "--raleway-font",
});

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "Ralph" });
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  return (
    <>
      <Head>
        <title>SynthFeed Digest</title>
        <meta name="description" content="SynthFeed Digest Home Page" />
        <link rel="icon" href="/imgs/logo.png" />
      </Head>

      <main
        className={` grid min-h-screen grid-cols-layout grid-rows-layout   bg-bg bg-gradient-to-b from-lightGrey to-darkGrey ${bebas.variable} ${raleway.variable} ${roboto.variable}`}
      >
        <div
          className={`col-span-1 row-span-full hidden max-h-screen md:block`}
        >
          <LeftTab />
        </div>
        <div className=" col-span-full col-start-1 md:col-start-2">
          <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
        <div
          className={`col-span-full col-start-1 md:col-start-2   ${
            menuOpen ? "opacity-0" : "opacity-100"
          }  h-[calc(100vh_-_120px)] overflow-y-scroll transition-all duration-1000 sm:px-5 md:px-0`}
        >
          <div className={`flex pt-4`}>
            <div className="w-full md:w-3/4 ">
              <Hero />
            </div>
            <div className="mx-3 w-full flex-1 bg-red-500">.</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
