import React from "react";
import { Avatar } from "~/Components/avatar";
import Image from "next/image";
import github_project from "../stock/github_project.png";
import { CustomLayout } from "~/Layout/CustomLayout";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

export default function about() {
  return (
    <CustomLayout>
      <div className="flex w-full flex-col items-center justify-center">
        <div
          className="my-24 flex w-full justify-center rounded-xl bg-neutral p-4 align-middle md:w-[70%]"
          id="frame"
        >
          <div
            id="content"
            className="flex w-[90%] flex-col items-center gap-4 align-middle"
          >
            <div className="flex w-full flex-col items-center justify-center gap-4 ">
              <h1 className="text-center text-xl sm:text-4xl">
                Poramat Chianvichai
              </h1>
              <div className="my-4 text-center">
                <p className="my-4 text-2xl text-primary">
                  Student of Innovative Physics program, Mahidol University
                </p>
              </div>
              {/* <Avatar /> */}
              <div className="flex w-full flex-col justify-start ">
                <motion.div
                  className="my-2 rounded-xl bg-base-100 p-4 py-4 opacity-75"
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <h1 className="flex flex-col py-2 text-xl">EDUCATION</h1>
                  <p className="pl-4 pt-1 text-white">
                    Middle, High School: Nawamintharachinuthit
                    Triumudomsuksanomkao
                  </p>
                  <p className="pl-4 pt-1 text-white">
                    Bechelor Degree: Department of Physics, Faculty of Science,
                    Mahidol University.
                  </p>
                  <p className="pl-4 pt-1 text-white">
                    Master Degree (not graduated): Innovative Physics program,
                    Faculty of Science, Mahidol University.
                  </p>
                </motion.div>
                <motion.div
                  className="my-2 rounded-xl bg-base-100 p-4 py-4 opacity-75"
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <h1 className="flex flex-col text-xl">BIO</h1>
                  <p className="pl-4 pt-1 text-white">
                    Date of birth: 1st September 1999
                  </p>
                </motion.div>
                <motion.div
                  className="my-2 rounded-xl bg-base-100 p-4 py-4 opacity-75"
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <h1 className="flex flex-col text-xl">Contact</h1>
                  <p className="pl-4 pt-1 text-white">
                    Email: poramat.chianvichai@gmail.com
                  </p>
                  <p className="pl-4 pt-1 text-white">
                    Uni-email: poramat.cha@student.mahidol.edu
                  </p>
                  <p className="pl-4 pt-1 text-white">Tel: 081-208-1315</p>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
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
      </div>
    </CustomLayout>
  );
}
