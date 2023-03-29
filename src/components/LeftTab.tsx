import { type NextComponentType } from "next";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";

const LeftTab: NextComponentType = () => {
  return (
    <div className="z-10 flex h-full flex-col items-center justify-between bg-brown py-5 px-2 text-start">
      <div>
        <Image width={100} height={100} src="/imgs/logo.png" alt="logo" />
        <ul className="flex flex-col gap-y-5 font-raleway text-lg text-white">
          <h1 className="hover:text-lightGreen">Authors</h1>
          <h1 className="hover:text-lightGreen">Politics</h1>
          <h1 className="hover:text-lightGreen">Economy</h1>
        </ul>
      </div>
      <FaRegUserCircle className="text-white" size={50} />
    </div>
  );
};

export default LeftTab;
