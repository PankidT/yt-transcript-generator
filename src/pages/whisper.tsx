import React from "react";
import Image from "next/image";
import whisper1 from "../stock/whisper1.png";
import whisper2 from "../stock/whisper2.png";
import whisper3 from "../stock/whisper3.png";
import { CustomLayout } from "~/Layout/CustomLayout";

export default function whisper() {
  return (
    <CustomLayout>
      <div className="flex w-full flex-col items-center justify-center">
        <div
          className="my-24 flex w-full justify-center rounded-xl bg-neutral p-4 align-middle md:w-[80%]"
          id="frame"
        >
          <div id="content" className="w-[90%] ">
            <h1 className="py-2 text-center text-xl sm:text-4xl">
              What is OpenAi Whisper
            </h1>
            <Image className="object-cover py-4" src={whisper1} alt="cover" />
            <div className="mt-4">
              <p className="overflow-hidden truncate whitespace-normal py-4 text-justify text-lg">
                Whisper is an automatic speech recognition (ASR) system trained
                on 680,000 hours of multilingual and multitask supervised data
                collected from the web. We show that the use of such a large and
                diverse dataset leads to improved robustness to accents,
                background noise and technical language. Moreover, it enables
                transcription in multiple languages, as well as translation from
                those languages into English. We are open-sourcing models and
                inference code to serve as a foundation for building useful
                applications and for further research on robust speech
                processing.
              </p>
              <Image
                className="object-cover py-4"
                src={whisper2}
                alt="whisper-2"
              />
              <p className="overflow-hidden truncate whitespace-normal py-4 text-justify text-lg">
                The Whisper architecture is a simple end-to-end approach,
                implemented as an encoder-decoder Transformer. Input audio is
                split into 30-second chunks, converted into a log-Mel
                spectrogram, and then passed into an encoder. A decoder is
                trained to predict the corresponding text caption, intermixed
                with special tokens that direct the single model to perform
                tasks such as language identification, phrase-level timestamps,
                multilingual speech transcription, and to-English speech
                translation.
              </p>
              <Image
                className="object-cover py-4"
                src={whisper3}
                alt="whisper-3"
              />
              <p className="overflow-hidden truncate whitespace-normal py-4 text-justify text-lg">
                Other existing approaches frequently use smaller, more closely
                paired audio-text training datasets,1 2,3 or use broad but
                unsupervised audio pretraining.4,5,6 Because Whisper was trained
                on a large and diverse dataset and was not fine-tuned to any
                specific one, it does not beat models that specialize in
                LibriSpeech performance, a famously competitive benchmark in
                speech recognition. However, when we measure Whisper’s zero-shot
                performance across many diverse datasets we find it is much more
                robust and makes 50% fewer errors than those models. About a
                third of Whisper’s audio dataset is non-English, and it is
                alternately given the task of transcribing in the original
                language or translating to English. We find this approach is
                particularly effective at learning speech to text translation
                and outperforms the supervised SOTA on CoVoST2 to English
                translation zero-shot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
}
