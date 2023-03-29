import { type NextComponentType } from "next";
import Image from "next/image";
import useWindowWidth from "~/utils/useWindowWith";
import Button from "./Button";

const Hero: NextComponentType = () => {
  const width = useWindowWidth();

  return (
    <div className="relative bg-gradient-to-bl from-lightGreen to-darkGreen">
      <div className=" w-full py-16 pl-4 text-white sm:pl-10 md:w-1/2">
        <h1 className="font-bebas text-xl tracking-wider text-lighterGreen md:text-4xl">
          STAY AHEAD
        </h1>
        <div className="py-2" />
        <h1 className="font-bebas text-5xl tracking-widest text-smokeWhite md:text-6xl ">
          Get your daily dose of news
        </h1>
        <div className="py-2" />
        <p className="font-roboto text-base text-sub md:text-xl">
          Stay informed with the latest news and trends from around the world.
          Our AI-powered summaries provide you with the knowledge you need in
          just a few minutes, so you can stay ahead of the game and be in the
          know. Join us now and see what you&apos;ve been missing!
        </p>
        <div className="py-4" />
        <Button>
          <h1 className="font-raleway text-sm md:text-lg">Get Started</h1>
        </Button>
      </div>
      <div className="absolute right-12 bottom-0 hidden w-fit md:block">
        <Image
          src="/imgs/Wireframe2(2).png"
          width={width && width < 1105 ? (width < 800 ? 350 : 400) : 440}
          height={100}
          alt="Mountain Bird"
        />
      </div>
    </div>
  );
};

export default Hero;
