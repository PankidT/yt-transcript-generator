import React from "react";
import { motion } from "framer-motion";
import Router from "next/router";

interface BillboardProps {
  imageUrl?: string;
  text?: string;
}

const router = Router;

const Billboard: React.FC<BillboardProps> = ({ imageUrl, text }) => {
  const url =
    "https://appen.com/wp-content/uploads/2021/12/What-is-Automatic-Speech-Recognition-2-1.png";

  return (
    <div className="relative ">
      <figure className="relative inline-block w-full ">
        <img
          src={url}
          alt="Billboard Image"
          className="block h-auto w-full opacity-30"
        />
        <figcaption className="absolute left-[5%] top-[40%] flex flex-col text-left ">
          <motion.h1
            className="text-md md:text-5xl"
            initial={{ opacity: 0, x: -100 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            Transcribe Generator from OpenAI
          </motion.h1>
          <motion.p
            className="pl-2 pt-4 text-sm md:text-xl"
            initial={{ opacity: 0, x: -100 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            This web application is include in the webapplication subject.
          </motion.p>
          <motion.p
            className="pl-2 text-sm md:text-xl"
            initial={{ opacity: 0, x: -100 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            The objective is to auto transcript the video from youtube.
          </motion.p>
          <motion.div
            className="pl-4 pt-4"
            initial={{ opacity: 0, x: -100 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <button
              className="btn-outline btn w-36"
              onClick={() => router.push("transcribe")}
            >
              Try now
            </button>
          </motion.div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Billboard;
