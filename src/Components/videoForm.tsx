import React, { useState, useEffect } from "react";

type Props = {
  onSubmit: (videoUrl: string) => void;
  isProcessing: boolean;
};

export const VideoForm: React.FC<Props> = ({ onSubmit, isProcessing }) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const videoUrl = (e.target as HTMLFormElement | undefined)?.videoUrl
      ?.value as string;
    onSubmit(videoUrl);
  };

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
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="text"
          placeholder="Fill url here"
          className="input-bordered input-primary input w-full"
          // value={formData.url}
          // onChange={handleChange}
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
