import React from "react";
import { Avatar } from "~/Components/avatar";

export default function about() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div
        className="my-24 flex w-full justify-center rounded-xl bg-neutral p-4 align-middle md:w-[80%]"
        id="frame"
      >
        <div
          id="content"
          className="flex w-[90%] flex-col items-center gap-4 align-middle"
        >
          <h1 className="py-2 text-center text-xl sm:text-4xl">
            Poramat Chianvichai
          </h1>
          <div className="my-4 text-center">
            <p className="my-4 text-2xl text-primary">
              Student of Innovative Physics program, Mahidol University
            </p>
            <p className="my-4 text-2xl text-primary">Born: 1999 September 1</p>
          </div>
          <Avatar />
          <h1 className="py-2 text-center text-xl sm:text-4xl">
            Project Github
          </h1>
        </div>
      </div>
    </div>
  );
}
