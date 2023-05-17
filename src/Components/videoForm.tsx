import React, { useState, useEffect } from "react";
import { ModelSetting } from "./modelSetting";

type Props = {
  onSubmit: (videoUrl: string) => void;
  isProcessing: boolean;
};

export const VideoForm: React.FC<Props> = ({ onSubmit, isProcessing }) => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(videoUrl);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <p className="my-2">Youtube URL</p>

      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="text"
          placeholder="Youtube URL here"
          className="input-bordered input-primary input w-full"
          required
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button
          type="submit"
          className="btn-primary btn"
          disabled={isProcessing}
        >
          {isProcessing ? "Processing.." : "Start processing"}
        </button>
        <ModelSetting />
      </div>
    </form>
  );
};
