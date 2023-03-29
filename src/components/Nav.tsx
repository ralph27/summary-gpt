import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import React from "react";
import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const user = useUser();

  console.log(user.user);

  return (
    <div className="flex h-full items-center justify-between bg-transparent px-5 md:px-10">
      <div className="flex items-center">
        <h1
          className={`font-bebas text-3xl text-white md:text-4xl lg:text-5xl`}
        >
          SynthFeed Digest
        </h1>
      </div>

      <ul className="col-end-9 hidden items-center gap-5 font-raleway text-white md:flex md:text-base lg:text-lg">
        <li className="cursor-pointer hover:text-lightGreen">Home</li>
        <li className="cursor-pointer hover:text-lightGreen">Summaries</li>
        <li className="cursor-pointer hover:text-lightGreen">Trending</li>
      </ul>
      <div className="z-10 hidden md:block">
        <Button>
          {!!user.isSignedIn && <SignOutButton />}
          {!user.isSignedIn && <SignInButton />}
        </Button>
      </div>
      <div className="z-10 md:hidden">
        <RxHamburgerMenu
          size={35}
          className="text-lightGreen"
          onClick={() => setMenuOpen((prev: boolean) => !prev)}
        />
      </div>

      <ul
        className={`absolute right-0 top-0 flex h-screen flex-col gap-9 overflow-x-hidden pt-32 pr-4 text-end font-raleway text-4xl font-bold text-smokeWhite`}
      >
        <li
          className={`${
            menuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 "
          } transition-all duration-700`}
        >
          Home
        </li>
        <li
          className={`${
            menuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full  opacity-0 "
          }transition-all delay-150 duration-700`}
        >
          Summaries
        </li>
        <li
          className={`${
            menuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }  transition-all delay-300 duration-700`}
        >
          Trending
        </li>
        <li
          className={`${
            menuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }  transition-all delay-500 duration-700`}
        >
          Authors
        </li>
      </ul>
    </div>
  );
};

export default Nav;
