import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Board } from "~/Components/board";
import Image from "next/image";
import { motion } from "framer-motion";
import whisper1 from "../stock/whisper1.png";
import opensource from "../stock/opensource.jpeg";
import profile from "../stock/profile.jpg";
import { CustomLayout } from "~/Layout/CustomLayout";
import Billboard from "~/Components/billBoard";
import { useState, useEffect } from "react";
import LoadingAnimation from "~/Components/loadingAnimation";

const Home: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      {isLoaded ? (
        <CustomLayout>
          <Billboard />
          <div id="content" className="flex flex-col gap-6 p-16">
            {/* <div className="h-full w-full border border-red-400">test</div> */}
            <motion.div
              className={`flex w-full flex-col items-center justify-center lg:flex-row`}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="relative h-[22rem] w-full rounded-xl lg:h-[22rem] lg:w-[40%]">
                <Image
                  className="object-cover"
                  src={whisper1}
                  alt="whisper"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="w-full gap-2 bg-base-100 p-4 lg:w-[60%]">
                <h2 className="text-3xl text-primary">
                  <a href="#">What is OpenAi whisper</a>
                </h2>
                {/* Add horizontal line */}
                <div className="divider"></div>
                <p className="overflow-hidden truncate whitespace-normal text-justify text-lg">
                  Whisper is an automatic speech recognition (ASR) system
                  trained on 680,000 hours of multilingual and multitask
                  supervised data collected from the web. We show that the use
                  of such a large and diverse dataset leads to improved
                  robustness to accents, background noise and technical
                  language. Moreover, it enables transcription in multiple
                  languages, as well as translation from those languages into
                  English.
                </p>
                <div className="card-actions justify-end">
                  <Link
                    className="btn-ghost btn whitespace-normal text-primary"
                    href="/whisper"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={`flex w-full flex-col items-center justify-center lg:flex-row-reverse`}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="relative h-[22rem] w-full rounded-xl lg:h-[22rem] lg:w-[40%]">
                <Image
                  className="object-cover"
                  src={opensource}
                  alt="STT"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="w-full gap-2 bg-base-100 p-4 lg:w-[60%]">
                <h2 className="text-3xl text-primary">
                  <a href="#">Speech to Text open source</a>
                </h2>
                {/* Add horizontal line */}
                <div className="divider"></div>
                <p className="overflow-hidden truncate whitespace-normal text-justify text-lg">
                  A speech-to-text (STT) system, or sometimes called automatic
                  speech recognition (ASR) is as its name implies: A way of
                  transforming the spoken words via sound into textual data that
                  can be used later for any purpose.
                </p>
                <div className="card-actions justify-end">
                  <Link
                    className="btn-ghost btn whitespace-normal text-primary"
                    href="/stt"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={`flex w-full flex-col items-center justify-center lg:flex-row`}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="relative h-[22rem] w-full rounded-xl lg:h-[22rem] lg:w-[40%]">
                <Image
                  className="object-cover"
                  src={profile}
                  alt="about"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="w-full gap-2 bg-base-100 p-4 lg:w-[60%]">
                <h2 className="text-3xl text-primary">
                  <a href="#">About me & Project github</a>
                </h2>
                {/* Add horizontal line */}
                <div className="divider"></div>
                <p className="overflow-hidden truncate whitespace-normal text-justify text-lg">
                  My name is Poramat Chianvichai. I am a student of Innovative
                  physics program, Mahidol University. This is my final project
                  in web application subject. Learn more about my information.
                </p>
                <div className="card-actions justify-end">
                  <Link
                    className="btn-ghost btn whitespace-normal text-primary"
                    href="/about"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </CustomLayout>
      ) : (
        <div className="flex h-screen items-center justify-center">
          <LoadingAnimation />
        </div>
      )}
    </>
  );
};

export default Home;
