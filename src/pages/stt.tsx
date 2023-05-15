import React from "react";
import { Card } from "~/Components/card";
import { CustomLayout } from "~/Layout/CustomLayout";

type Meta = {
  figureURL: string;
  title: string;
  delay: number;
  link: string;
};

const meta: Meta[] = [
  {
    figureURL:
      "https://opengraph.githubassets.com/0aa9a79093ad41b3697f57d159d3069e0364f5c614e3bd82fd7682d60d1cef64/mozilla/DeepSpeech",
    title: "DeepSpeech",
    delay: 0.15,
    link: "https://github.com/mozilla/DeepSpeech",
  },
  {
    figureURL:
      "https://opengraph.githubassets.com/93891cf0215ff382738d7baa576958f4865865329341621799014031f4c7b740/julius-speech/julius",
    title: "Julius",
    delay: 0.3,
    link: "https://github.com/julius-speech/julius",
  },
  {
    figureURL:
      "https://opengraph.githubassets.com/0866d223d4d8993c7ec7ac24139ad9e11eea41500603ae22e75969b436f5867a/flashlight/wav2letter",
    title: "wav2letter",
    delay: 0.45,
    link: "https://github.com/flashlight/flashlight",
  },
  {
    figureURL:
      "https://opengraph.githubassets.com/7c057a8aa8f099b532ebd177775697a056411525bb25ad66158870cfc5c6f2ff/PaddlePaddle/PaddleSpeech",
    title: "PaddleSpeech",
    delay: 0.6,
    link: "https://github.com/PaddlePaddle/PaddleSpeech",
  },
];

const meta2: Meta[] = [
  {
    figureURL:
      "https://opengraph.githubassets.com/0d73afff88f8ac73c888145417c027840e7f7919998c4ae8ef5de86058da0566/NVIDIA/OpenSeq2Seq",
    title: "OpenSeq2Seq",
    delay: 0.75,
    link: "https://github.com/NVIDIA/OpenSeq2Seq",
  },
  {
    figureURL:
      "https://opengraph.githubassets.com/c0add0b96dd5b9966084e8df25130430fd129ef8c0971f4cd7867b13f0889010/alphacep/vosk-api",
    title: "Vosk",
    delay: 0.9,
    link: "https://github.com/alphacep/vosk-api",
  },
  {
    figureURL:
      "https://opengraph.githubassets.com/26bce588b0e8ebe102d42eb04d9a1f8a72c668d093eb9e4e40718222d8c58804/athena-team/athena",
    title: "Athena",
    delay: 1.05,
    link: "https://github.com/athena-team/athena",
  },
  {
    figureURL:
      "https://opengraph.githubassets.com/e85cb8e817af6df7ffffb5c40cdc1fc7b4a671244b37f629f42d9459c7654ee5/espnet/espnet",
    title: "ESPnet",
    delay: 1.2,
    link: "https://github.com/espnet/espnet",
  },
];

export default function stt() {
  return (
    <CustomLayout>
      <div className="flex w-full flex-col items-center justify-center ">
        <div
          className="mb-3 mt-20 flex w-full flex-col items-center justify-around gap-4 rounded-xl p-4 align-middle md:w-[95%] md:flex-row"
          id="frame"
        >
          {meta.map((item, keys) => (
            <Card
              imageURL={item.figureURL}
              content={item.title}
              delay={item.delay}
              link={item.link}
              key={keys}
            />
          ))}
        </div>
        <div
          className="mb-3 flex w-full flex-col items-center justify-around gap-4 rounded-xl p-4 align-middle md:w-[95%] md:flex-row"
          id="frame"
        >
          {meta2.map((item, keys) => (
            <Card
              imageURL={item.figureURL}
              content={item.title}
              delay={item.delay}
              link={item.link}
              key={keys}
            />
          ))}
        </div>
      </div>
    </CustomLayout>
  );
}
