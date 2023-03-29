import { type ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" w-fit cursor-pointer rounded-xl bg-accent px-5 py-2 font-raleway text-white transition-colors ease-in hover:bg-gradient-to-br hover:from-darkGreen hover:to-lightGreen md:text-base lg:text-lg">
      {children}
    </div>
  );
};

export default Button;
