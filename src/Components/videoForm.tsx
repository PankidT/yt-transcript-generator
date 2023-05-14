import React, { useState, useEffect } from "react";

type Props = {
  onSubmit: (videoUrl: string) => void;
  isProcessing: boolean;
};

export const VideoForm: React.FC<Props> = ({ onSubmit, isProcessing }) => {
  // const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
  //   e.preventDefault();

  //   const videoUrl = (e.target as HTMLFormElement | undefined)?.videoUrl
  //     ?.value as string;
  //   onSubmit(videoUrl);
  // };

  // 2nd way
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(videoUrl);
  };

  // 3rd way
  // const [formData, setFormData] = useState({
  //   url: "",
  // });

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <p className="my-2">Youtube URL</p>
      {/* <span className="text-red-600 opacity-80" data-message="valueMissing">
        Please enter a video URL
      </span>
      <span className="text-red-600 opacity-80" data-message="typeMismatch">
        Please provide a valid URL
      </span> */}
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
      </div>
    </form>
  );
};
