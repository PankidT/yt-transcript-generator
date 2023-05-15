import React from "react";
import { Avatar } from "~/Components/avatar";
import Image from "next/image";
import github_project from "../stock/github_project.png";
import { CustomLayout } from "~/Layout/CustomLayout";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

export default function about() {
  return (
    <CustomLayout>
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
            </div>
            <Avatar />
            <h1 className="py-4 text-center text-xl sm:text-4xl">
              Project on Github
            </h1>
            <Image src={github_project} alt="github" />
            <Link href="https://github.com/PankidT/yt-transcript-generator">
              <AiFillGithub className="text-6xl" />
            </Link>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
}
