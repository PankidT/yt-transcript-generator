import { NextApiRequest, NextApiResponse } from "next";
import { spawn } from "child_process";
import path from "path";
import { transferChildProcessOutput } from "~/utils/shell";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;

  // Extract the video ID from the query parameters
  const videoId = query.videoId as string;

  // Validate the video ID
  if (typeof videoId !== "string") {
    res.status(400).json({ error: "Video ID is missing." });
    return;
  }

  console.log("video ID:", videoId);
  const cmd = spawn(path.join(process.cwd(), "src/Script/yt-downloader.sh"), [
    videoId || "",
  ]);
  transferChildProcessOutput(cmd, res);
}
