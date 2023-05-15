import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type props = {
  imageURL: string;
  content: string;
  delay: number;
  link: string;
};

export const Card = ({ imageURL, content, delay, link }: props) => {
  return (
    <motion.div
      className="card h-72 w-64 bg-neutral shadow-xl"
      initial={{ opacity: 0, x: -100 }}
      transition={{ delay: delay }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <figure className="">
        <img src={imageURL} className="" />
      </figure>
      <div className="card-body flex justify-center text-center align-middle">
        <h2 className="py-2 text-xl">{content}</h2>
        <Link href={link}>
          <button className="btn-primary btn w-auto">Read more</button>
        </Link>
      </div>
    </motion.div>
  );
};
