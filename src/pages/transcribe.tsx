import React from "react";

export default function transcribe() {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center gap-1 p-1"
      id="screen"
    >
      <div className="no-scrollbar flex h-24 w-full justify-center overflow-y-scroll rounded-xl"></div>
      <div className="flex h-full w-[100vw] flex-col gap-2 sm:w-[80vw]">
        <div className="flex h-[90%] flex-col gap-4 rounded-xl bg-neutral p-4 shadow-md">
          <h1 className="text-center text-lg sm:text-2xl">
            Youtube transcribe auto generation by OpenAI API
          </h1>
          <div className="">
            <p className="my-2">Youtube URL</p>
            <input
              type="text"
              placeholder="Fill url here"
              className="input-bordered input-primary input w-full"
            />
          </div>
          <textarea
            className="textarea-bordered textarea h-full"
            placeholder=""
          ></textarea>
          <div className="tabs tabs-boxed justify-center">
            <a className="tab tab-active">Processing</a>
            <a className="tab">Output</a>
          </div>
        </div>
      </div>
    </div>
  );
}
