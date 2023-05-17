import type { NextApiRequest, NextApiResponse } from "next";
import { spawn } from "child_process";
import path from "path";
import { transferChildProcessOutput } from "~/utils/shell";

export default function GET(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const videoId = request.query.videoId as string;
  const targetLanguage = request.query.language as string;
  const model = request.query.model as string;

  if (typeof videoId !== "string") {
    response.status(400).json({ error: "Invalid request" });
    return;
  }

  if (typeof targetLanguage !== "string") {
    response.status(400).json({ error: "Invalid request" });
    return;
  }

  if (typeof model !== "string") {
    response.status(400).json({ error: "Invalid request" });
    return;
  }

  const cmd = spawn(
    "python",
    [
      path.join(process.cwd(), "src/Script/transcribe.py"),
      videoId,
      targetLanguage,
      model || "",
    ],
    {
      cwd: process.cwd(),
    }
  );
  transferChildProcessOutput(cmd, response);
}
